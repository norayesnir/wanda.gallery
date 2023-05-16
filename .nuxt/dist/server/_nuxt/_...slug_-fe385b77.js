import { _ as __nuxt_component_0 } from "./ControlsPopup-8b0a8025.js";
import { defineComponent, withAsyncContext, resolveComponent, useSSRContext } from "vue";
import "hookable";
import { u as useRoute, i as useAsyncData, q as queryContent, l as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    [__temp, __restore] = withAsyncContext(() => useAsyncData(`content-${path}`, () => {
      return queryContent().where({ _path: path }).only(["scene"]).findOne();
    })), __temp = await __temp, __restore(), __temp;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ControlsPopup = __nuxt_component_0;
      const _component_RoomsGhibli = resolveComponent("RoomsGhibli");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cb5288f1>`);
      _push(ssrRenderComponent(_component_ControlsPopup, null, null, _parent));
      _push(ssrRenderComponent(_component_RoomsGhibli, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const ____slug__vue_vue_type_style_index_0_scoped_cb5288f1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb5288f1"]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-fe385b77.js.map
