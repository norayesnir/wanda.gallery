import { b as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    let date = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-18056307><div class="content" data-v-18056307><p data-v-18056307> info@wanda.gallery</p><p data-v-18056307> © Copyright Wanda Tuerlinckx — All rights reserved ${ssrInterpolate(unref(date))}</p></div><div class="socials" data-v-18056307><a href="https://www.facebook.com/wanda.tuerlinckx" data-v-18056307>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bxl:facebook",
        class: "facebook",
        size: "24"
      }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/in/wanda-tuerlinckx-3618ab104/" data-v-18056307>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bxl:linkedin",
        class: "linkedin",
        size: "24"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/wandatuerlinckxphotography/" data-v-18056307>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bxl:instagram",
        class: "instagram",
        size: "24"
      }, null, _parent));
      _push(`</a></div></div>`);
    };
  }
});
const AppFooter_vue_vue_type_style_index_0_scoped_18056307_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18056307"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=AppFooter-16a5d0f3.js.map
