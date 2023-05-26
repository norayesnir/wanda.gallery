import { u as useNuxtApp, d as defineStore, a as useNavigationMenuStore, s as storeToRefs, b as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import __nuxt_component_1 from "./Controls-080c51e1.js";
import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
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
import "./Arrow-6abaaf87.js";
function useDevice() {
  return useNuxtApp().$device;
}
const useControlsStore = defineStore("main", {
  state: () => ({
    controlsPopupVisible: false
  })
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ControlsPopup",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = useNavigationMenuStore();
    const controls = useControlsStore();
    storeToRefs(menu);
    storeToRefs(controls);
    const { isDesktop } = useDevice();
    function close() {
      controls.controlsPopupVisible = controls.controlsPopupVisible == true ? false : true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_Controls = __nuxt_component_1;
      if (unref(isDesktop)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [{ closed: unref(controls).controlsPopupVisible }, "controls-popup"]
        }, _attrs))} data-v-f22e8a76><section class="card-content" data-v-f22e8a76><div class="card-header" data-v-f22e8a76><div class="title" data-v-f22e8a76>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:chart-3d",
          size: "32"
        }, null, _parent));
        _push(`<h3 data-v-f22e8a76>Controls</h3></div>`);
        _push(ssrRenderComponent(_component_Icon, {
          onClick: close,
          class: "close",
          name: "ic:outline-close",
          size: "36"
        }, null, _parent));
        _push(`</div><div class="card-information" data-v-f22e8a76><div class="card-paragraph" data-v-f22e8a76><p data-v-f22e8a76>Move around with the WASD-keys or the arrow-keys of your keyboard. Look around by draging your mouse over the screen.</p></div>`);
        _push(ssrRenderComponent(_component_Controls, null, null, _parent));
        _push(`</div></section></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-controls" }, _attrs))} data-v-f22e8a76>`);
        _push(ssrRenderComponent(_component_Controls, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
});
const ControlsPopup_vue_vue_type_style_index_0_scoped_f22e8a76_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ControlsPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ControlsPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f22e8a76"]]);
export {
  ControlsPopup as default
};
//# sourceMappingURL=ControlsPopup-3efc6766.js.map
