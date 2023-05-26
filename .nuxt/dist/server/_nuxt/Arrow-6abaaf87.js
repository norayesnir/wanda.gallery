import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "uuid-4b29ea88-df0e-43d3-aa9d-50ffb078ea7d",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12.52 11.34"
  }, _attrs))}><g id="uuid-adae3106-a4bb-4cf2-8f28-245c340616f7"><path d="m6.26,1c.15,0,.53.04.76.44l4.38,7.59c.23.39.08.74,0,.87s-.3.44-.76.44H1.87c-.46,0-.68-.31-.76-.44s-.23-.48,0-.87L5.49,1.44c.23-.39.6-.44.76-.44m0-1c-.63,0-1.26.31-1.62.94L.25,8.53c-.72,1.25.18,2.81,1.62,2.81h8.77c1.44,0,2.34-1.56,1.62-2.81L7.88.94c-.36-.62-.99-.94-1.62-.94h-.01Z" style="${ssrRenderStyle({ "fill": "#000" })}"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Arrow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Arrow-6abaaf87.js.map
