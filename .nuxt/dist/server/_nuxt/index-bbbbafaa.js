import __nuxt_component_0 from "./Hero-97fce415.js";
import __nuxt_component_1 from "./CategorySelection-1cb514f7.js";
import __nuxt_component_2 from "./AppFooter-16a5d0f3.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./Button-a6363d5a.js";
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
const index_vue_vue_type_style_index_0_scoped_1c0c5c84_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomepageHero = __nuxt_component_0;
  const _component_HomepageCategorySelection = __nuxt_component_1;
  const _component_AppFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-1c0c5c84><div class="flex" data-v-1c0c5c84><section class="section-one" data-v-1c0c5c84>`);
  _push(ssrRenderComponent(_component_HomepageHero, null, null, _parent));
  _push(`</section><section class="section-two" data-v-1c0c5c84>`);
  _push(ssrRenderComponent(_component_HomepageCategorySelection, null, null, _parent));
  _push(`</section></div>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1c0c5c84"]]);
export {
  index as default
};
//# sourceMappingURL=index-bbbbafaa.js.map
