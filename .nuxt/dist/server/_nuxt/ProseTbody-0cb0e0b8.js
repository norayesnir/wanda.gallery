import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
  _push(`<tbody${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</tbody>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseTbody = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProseTbody as default
};
//# sourceMappingURL=ProseTbody-0cb0e0b8.js.map
