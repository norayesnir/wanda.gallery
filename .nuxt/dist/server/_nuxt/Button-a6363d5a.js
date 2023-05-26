import { f as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: "/"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "border-gradient button"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$props.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$props.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const Button_vue_vue_type_style_index_0_scoped_e1179465_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/template/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e1179465"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Button-a6363d5a.js.map
