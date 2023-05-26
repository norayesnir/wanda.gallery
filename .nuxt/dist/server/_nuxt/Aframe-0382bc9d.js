import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "tslib";
import "ts-invariant";
import "ts-invariant/process/index.js";
import "graphql";
import "zen-observable-ts";
import "symbol-observable";
import "ohash";
import "cookie-es";
import "optimism";
import "@wry/equality";
import "@wry/trie";
import "graphql-tag";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "defu";
const _sfc_main = {
  name: "Aframe",
  props: {
    scene: {
      type: String,
      required: true,
      default: '<a-scene><a-entity><a-text value="No scene rendered" color="#fff" position="0 4 -5" align="center"geometry="primitive: plane; width: 4; height: .5" material="color: #333"></a-text></a-entity></a-scene>'
    }
  }
};
const Aframe_vue_vue_type_style_index_0_scoped_7740b6ef_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "aframe" }, _attrs))} data-v-7740b6ef>${$props.scene}</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Aframe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Aframe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7740b6ef"]]);
export {
  Aframe as default
};
//# sourceMappingURL=Aframe-0382bc9d.js.map
