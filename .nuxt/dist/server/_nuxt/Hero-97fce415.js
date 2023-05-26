import __nuxt_component_0$1 from "./Button-a6363d5a.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __publicAssetsURL("erica-hiroshi-ishiguro-laboratories-kyoto-japan-wanda-tuerlinckx.webp");
const Hero_vue_vue_type_style_index_0_scoped_907129f7_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TemplateButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-907129f7><div class="content" data-v-907129f7><h1 data-v-907129f7>Wanda Tuerlinckx Gallery</h1><div class="buttons" data-v-907129f7>`);
  _push(ssrRenderComponent(_component_TemplateButton, {
    to: "/",
    color: "primary",
    name: "Zie mijn werk"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TemplateButton, {
    to: "/",
    color: "secondary",
    name: "Over Mij"
  }, null, _parent));
  _push(`</div></div><img class="image"${ssrRenderAttr("src", _imports_0)} alt="erica-hiroshi-ishiguro-laboratories-kyoto-japan" data-v-907129f7></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-907129f7"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Hero-97fce415.js.map
