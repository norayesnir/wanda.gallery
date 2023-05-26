import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const Contact_vue_vue_type_style_index_0_scoped_38a90b0f_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavigationSocial = resolveComponent("NavigationSocial");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact" }, _attrs))} data-v-38a90b0f><h1 data-v-38a90b0f>Contact</h1><div class="socials" data-v-38a90b0f>`);
  _push(ssrRenderComponent(_component_NavigationSocial, {
    href: "https://www.facebook.com/wanda.tuerlinckx",
    iconName: "bxl:facebook",
    class: "facebook"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NavigationSocial, {
    href: "https://www.linkedin.com/in/wanda-tuerlinckx-3618ab104/",
    iconName: "bxl:linkedin",
    class: "linkedin"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NavigationSocial, {
    href: "https://www.instagram.com/wandatuerlinckxphotography/",
    iconName: "bxl:instagram",
    class: "instagram"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-38a90b0f"]]);
export {
  Contact as default
};
//# sourceMappingURL=Contact-d0165bda.js.map
