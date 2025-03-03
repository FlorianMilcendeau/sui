// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use anyhow::Context;
use fastcrypto::encoding::Base64;
use jsonrpsee::{
    core::RpcResult,
    http_client::{HeaderMap, HeaderValue, HttpClient, HttpClientBuilder},
    proc_macros::rpc,
};
use sui_json_rpc_types::{
    DryRunTransactionBlockResponse, SuiTransactionBlockResponse, SuiTransactionBlockResponseOptions,
};
use sui_open_rpc::Module;
use sui_open_rpc_macros::open_rpc;
use sui_types::quorum_driver_types::ExecuteTransactionRequestType;

use crate::{
    config::WriteConfig,
    error::{client_error_to_error_object, invalid_params},
};

use super::rpc_module::RpcModule;

pub const CLIENT_SDK_TYPE_HEADER: &str = "client-sdk-type";

#[open_rpc(namespace = "sui", tag = "Write API")]
#[rpc(server, client, namespace = "sui")]
pub trait WriteApi {
    /// Execute the transaction with options to show different information in the response.
    /// The only supported request type is `WaitForEffectsCert`: waits for TransactionEffectsCert and then return to client.
    /// `WaitForLocalExecution` mode has been deprecated.
    #[method(name = "executeTransactionBlock")]
    async fn execute_transaction_block(
        &self,
        /// BCS serialized transaction data bytes without its type tag, as base-64 encoded string.
        tx_bytes: Base64,
        /// A list of signatures (`flag || signature || pubkey` bytes, as base-64 encoded string). Signature is committed to the intent message of the transaction data, as base-64 encoded string.
        signatures: Vec<Base64>,
        /// options for specifying the content to be returned
        options: Option<SuiTransactionBlockResponseOptions>,
        /// The request type, derived from `SuiTransactionBlockResponseOptions` if None
        request_type: Option<ExecuteTransactionRequestType>,
    ) -> RpcResult<SuiTransactionBlockResponse>;

    /// Return transaction execution effects including the gas cost summary,
    /// while the effects are not committed to the chain.
    #[method(name = "dryRunTransactionBlock")]
    async fn dry_run_transaction_block(
        &self,
        tx_bytes: Base64,
    ) -> RpcResult<DryRunTransactionBlockResponse>;
}

#[derive(clap::Args, Debug, Clone)]
pub struct WriteArgs {
    /// The URL of the fullnode RPC we connect to for executing transactions.
    pub fullnode_rpc_url: url::Url,
}

pub(crate) struct Write(pub HttpClient);

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("WaitForLocalExecution mode is deprecated")]
    DeprecatedWaitForLocalExecution,
}

impl Write {
    pub fn new(args: WriteArgs, config: WriteConfig) -> anyhow::Result<Self> {
        let mut headers = HeaderMap::new();
        headers.insert(
            CLIENT_SDK_TYPE_HEADER,
            HeaderValue::from_str(&config.header_value)?,
        );

        Ok(Self(
            HttpClientBuilder::default()
                .max_request_size(config.max_request_size)
                .set_headers(headers.clone())
                .build(&args.fullnode_rpc_url)
                .context("Failed to initialize fullnode RPC client")?,
        ))
    }
}

#[async_trait::async_trait]
impl WriteApiServer for Write {
    async fn execute_transaction_block(
        &self,
        tx_bytes: Base64,
        signatures: Vec<Base64>,
        options: Option<SuiTransactionBlockResponseOptions>,
        request_type: Option<ExecuteTransactionRequestType>,
    ) -> RpcResult<SuiTransactionBlockResponse> {
        if let Some(ExecuteTransactionRequestType::WaitForLocalExecution) = request_type {
            return Err(invalid_params(Error::DeprecatedWaitForLocalExecution).into());
        }
        self.0
            .execute_transaction_block(tx_bytes, signatures, options, request_type)
            .await
            .map_err(client_error_to_error_object)
    }

    async fn dry_run_transaction_block(
        &self,
        tx_bytes: Base64,
    ) -> RpcResult<DryRunTransactionBlockResponse> {
        self.0
            .dry_run_transaction_block(tx_bytes)
            .await
            .map_err(client_error_to_error_object)
    }
}

impl RpcModule for Write {
    fn schema(&self) -> Module {
        WriteApiOpenRpc::module_doc()
    }

    fn into_impl(self) -> jsonrpsee::RpcModule<Self> {
        self.into_rpc()
    }
}
