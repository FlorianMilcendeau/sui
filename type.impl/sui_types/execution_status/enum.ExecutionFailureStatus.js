(function() {
    var type_impls = Object.fromEntries([["sui_types",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-Clone-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sui_types::error::ExecutionErrorKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-Debug-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_types::error::ExecutionErrorKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-Deserialize%3C'de%3E-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.217/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sui_types::error::ExecutionErrorKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-Display-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, __formatter: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","sui_types::error::ExecutionErrorKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EnumOrderMap-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-EnumOrderMap-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sui_enum_compat_util/trait.EnumOrderMap.html\" title=\"trait sui_enum_compat_util::EnumOrderMap\">EnumOrderMap</a> for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.order_to_variant_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#method.order_to_variant_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sui_enum_compat_util/trait.EnumOrderMap.html#tymethod.order_to_variant_map\" class=\"fn\">order_to_variant_map</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></div></details>","EnumOrderMap","sui_types::error::ExecutionErrorKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-Error-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.source\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.30.0\">1.30.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/error.rs.html#81\">Source</a></span><a href=\"#method.source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html#method.source\" class=\"fn\">source</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static)&gt;</h4></section></summary><div class='docblock'>Returns the lower-level source of this error, if any. <a href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html#method.source\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.description\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/error.rs.html#107\">Source</a></span><a href=\"#method.description\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html#method.description\" class=\"fn\">description</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.str.html\">str</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.42.0: use the Display impl or to_string()</span></div></span><div class='docblock'> <a href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html#method.description\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cause\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/error.rs.html#117\">Source</a></span><a href=\"#method.cause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html#method.cause\" class=\"fn\">cause</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.33.0: replaced by Error::source, which can support downcasting</span></div></span></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.provide\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.85.0/src/core/error.rs.html#180\">Source</a><a href=\"#method.provide\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html#method.provide\" class=\"fn\">provide</a>&lt;'a&gt;(&amp;'a self, request: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/core/error/struct.Request.html\" title=\"struct core::error::Request\">Request</a>&lt;'a&gt;)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>error_generic_member_access</code>)</span></div></span><div class='docblock'>Provides type-based access to context intended for error reports. <a href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html#method.provide\">Read more</a></div></details></div></details>","Error","sui_types::error::ExecutionErrorKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#309-313\">Source</a><a href=\"#impl-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.command_argument_error\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#310-312\">Source</a><h4 class=\"code-header\">pub fn <a href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html#tymethod.command_argument_error\" class=\"fn\">command_argument_error</a>(kind: <a class=\"enum\" href=\"sui_types/execution_status/enum.CommandArgumentError.html\" title=\"enum sui_types::execution_status::CommandArgumentError\">CommandArgumentError</a>, arg_idx: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u16.html\">u16</a>) -&gt; Self</h4></section></div></details>",0,"sui_types::error::ExecutionErrorKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-PartialEq-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","sui_types::error::ExecutionErrorKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-Serialize-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.217/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sui_types::error::ExecutionErrorKind"],["<section id=\"impl-Eq-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-Eq-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section>","Eq","sui_types::error::ExecutionErrorKind"],["<section id=\"impl-StructuralPartialEq-for-ExecutionFailureStatus\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/execution_status.rs.html#41\">Source</a><a href=\"#impl-StructuralPartialEq-for-ExecutionFailureStatus\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"sui_types/execution_status/enum.ExecutionFailureStatus.html\" title=\"enum sui_types::execution_status::ExecutionFailureStatus\">ExecutionFailureStatus</a></h3></section>","StructuralPartialEq","sui_types::error::ExecutionErrorKind"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[21483]}