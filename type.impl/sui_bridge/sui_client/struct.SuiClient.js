(function() {var type_impls = {
"sui_bridge":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SuiClient%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#81-360\">source</a><a href=\"#impl-SuiClient%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"struct\" href=\"sui_bridge/sui_client/struct.SuiClient.html\" title=\"struct sui_bridge::sui_client::SuiClient\">SuiClient</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"sui_bridge/sui_client/trait.SuiClientInner.html\" title=\"trait sui_bridge::sui_client::SuiClientInner\">SuiClientInner</a>,</span></h3></section></summary><div class=\"impl-items\"><section id=\"method.new_for_testing\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#85-87\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.new_for_testing\" class=\"fn\">new_for_testing</a>(inner: P) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mutable_bridge_object_arg_must_succeed\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#103-115\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_mutable_bridge_object_arg_must_succeed\" class=\"fn\">get_mutable_bridge_object_arg_must_succeed</a>(&amp;self) -&gt; <a class=\"enum\" href=\"sui_types/transaction/enum.ObjectArg.html\" title=\"enum sui_types::transaction::ObjectArg\">ObjectArg</a></h4></section></summary><div class=\"docblock\"><p>Get the mutable bridge object arg on chain.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.query_events_by_module\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#118-138\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.query_events_by_module\" class=\"fn\">query_events_by_module</a>(\n    &amp;self,\n    package: <a class=\"struct\" href=\"sui_types/base_types/struct.ObjectID.html\" title=\"struct sui_types::base_types::ObjectID\">ObjectID</a>,\n    module: Identifier,\n    cursor: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sui_types/event/struct.EventID.html\" title=\"struct sui_types::event::EventID\">EventID</a>&gt;\n) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"struct\" href=\"sui_json_rpc_types/struct.Page.html\" title=\"struct sui_json_rpc_types::Page\">Page</a>&lt;<a class=\"struct\" href=\"sui_json_rpc_types/sui_event/struct.SuiEvent.html\" title=\"struct sui_json_rpc_types::sui_event::SuiEvent\">SuiEvent</a>, <a class=\"struct\" href=\"sui_types/event/struct.EventID.html\" title=\"struct sui_types::event::EventID\">EventID</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Query emitted Events that are defined in the given Move Module.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_bridge_action_by_tx_digest_and_event_idx_maybe\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#143-161\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_bridge_action_by_tx_digest_and_event_idx_maybe\" class=\"fn\">get_bridge_action_by_tx_digest_and_event_idx_maybe</a>(\n    &amp;self,\n    tx_digest: &amp;<a class=\"struct\" href=\"sui_types/digests/struct.TransactionDigest.html\" title=\"struct sui_types::digests::TransactionDigest\">TransactionDigest</a>,\n    event_idx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u16.html\">u16</a>\n) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"enum\" href=\"sui_bridge/types/enum.BridgeAction.html\" title=\"enum sui_bridge::types::BridgeAction\">BridgeAction</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns BridgeAction from a Sui Transaction with transaction hash\nand the event index. If event is declared in an unrecognized\npackage, return error.</p>\n</div></details><section id=\"method.get_bridge_summary\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#163-168\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_bridge_summary\" class=\"fn\">get_bridge_summary</a>(&amp;self) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"struct\" href=\"sui_types/bridge/struct.BridgeSummary.html\" title=\"struct sui_types::bridge::BridgeSummary\">BridgeSummary</a>&gt;</h4></section><section id=\"method.is_bridge_paused\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#170-174\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.is_bridge_paused\" class=\"fn\">is_bridge_paused</a>(&amp;self) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt;</h4></section><section id=\"method.get_treasury_summary\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#176-178\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_treasury_summary\" class=\"fn\">get_treasury_summary</a>(&amp;self) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"struct\" href=\"sui_types/bridge/struct.BridgeTreasurySummary.html\" title=\"struct sui_types::bridge::BridgeTreasurySummary\">BridgeTreasurySummary</a>&gt;</h4></section><section id=\"method.get_token_id_map\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#180-196\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_token_id_map\" class=\"fn\">get_token_id_map</a>(&amp;self) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>, TypeTag&gt;&gt;</h4></section><section id=\"method.get_notional_values\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#198-221\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_notional_values\" class=\"fn\">get_notional_values</a>(&amp;self) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>&gt;&gt;</h4></section><section id=\"method.get_bridge_committee\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#223-256\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_bridge_committee\" class=\"fn\">get_bridge_committee</a>(&amp;self) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"struct\" href=\"sui_bridge/types/struct.BridgeCommittee.html\" title=\"struct sui_bridge::types::BridgeCommittee\">BridgeCommittee</a>&gt;</h4></section><section id=\"method.get_chain_identifier\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#258-260\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_chain_identifier\" class=\"fn\">get_chain_identifier</a>(&amp;self) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section><section id=\"method.get_reference_gas_price_until_success\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#262-274\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_reference_gas_price_until_success\" class=\"fn\">get_reference_gas_price_until_success</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a></h4></section><section id=\"method.execute_transaction_block_with_effects\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#276-281\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.execute_transaction_block_with_effects\" class=\"fn\">execute_transaction_block_with_effects</a>(\n    &amp;self,\n    tx: <a class=\"type\" href=\"sui_types/transaction/type.Transaction.html\" title=\"type sui_types::transaction::Transaction\">Transaction</a>\n) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"struct\" href=\"sui_json_rpc_types/sui_transaction/struct.SuiTransactionBlockResponse.html\" title=\"struct sui_json_rpc_types::sui_transaction::SuiTransactionBlockResponse\">SuiTransactionBlockResponse</a>&gt;</h4></section><section id=\"method.get_token_transfer_action_onchain_status_until_success\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#284-308\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_token_transfer_action_onchain_status_until_success\" class=\"fn\">get_token_transfer_action_onchain_status_until_success</a>(\n    &amp;self,\n    source_chain_id: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>,\n    seq_number: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"enum\" href=\"sui_bridge/types/enum.BridgeActionStatus.html\" title=\"enum sui_bridge::types::BridgeActionStatus\">BridgeActionStatus</a></h4></section><section id=\"method.get_token_transfer_action_onchain_signatures_until_success\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#310-334\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_token_transfer_action_onchain_signatures_until_success\" class=\"fn\">get_token_transfer_action_onchain_signatures_until_success</a>(\n    &amp;self,\n    source_chain_id: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>,\n    seq_number: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;&gt;&gt;</h4></section><section id=\"method.get_parsed_token_transfer_message\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#336-350\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_parsed_token_transfer_message\" class=\"fn\">get_parsed_token_transfer_message</a>(\n    &amp;self,\n    source_chain_id: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>,\n    seq_number: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"type\" href=\"sui_bridge/error/type.BridgeResult.html\" title=\"type sui_bridge::error::BridgeResult\">BridgeResult</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sui_bridge/types/struct.ParsedTokenTransferMessage.html\" title=\"struct sui_bridge::types::ParsedTokenTransferMessage\">ParsedTokenTransferMessage</a>&gt;&gt;</h4></section><section id=\"method.get_gas_data_panic_if_not_gas\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_bridge/sui_client.rs.html#352-359\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_bridge/sui_client/struct.SuiClient.html#tymethod.get_gas_data_panic_if_not_gas\" class=\"fn\">get_gas_data_panic_if_not_gas</a>(\n    &amp;self,\n    gas_object_id: <a class=\"struct\" href=\"sui_types/base_types/struct.ObjectID.html\" title=\"struct sui_types::base_types::ObjectID\">ObjectID</a>\n) -&gt; (<a class=\"struct\" href=\"sui_types/gas_coin/checked/struct.GasCoin.html\" title=\"struct sui_types::gas_coin::checked::GasCoin\">GasCoin</a>, <a class=\"type\" href=\"sui_types/base_types/type.ObjectRef.html\" title=\"type sui_types::base_types::ObjectRef\">ObjectRef</a>, <a class=\"enum\" href=\"sui_types/object/enum.Owner.html\" title=\"enum sui_types::object::Owner\">Owner</a>)</h4></section></div></details>",0,"sui_bridge::sui_client::SuiBridgeClient"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()