import __nuxt_component_0 from "./Arrow-6abaaf87.js";
import { mergeProps, useSSRContext } from "vue";
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
const _sfc_main = {
  data() {
    return {
      timer: null,
      interval: 10
      // set the interval in milliseconds
    };
  },
  methods: {
    handleClick(direction) {
      const stepSize = 0.1;
      const entity = document.querySelector("#mario");
      const currentPosition = entity.getAttribute("position");
      const currentRotation = entity.getAttribute("rotation");
      switch (direction) {
        case "down":
          entity.setAttribute("position", `${currentPosition.x - stepSize * Math.sin(currentRotation.y / 180 * Math.PI)} ${currentPosition.y} ${currentPosition.z - stepSize * Math.cos(currentRotation.y / 180 * Math.PI)}`);
          break;
        case "up":
          entity.setAttribute("position", `${currentPosition.x + stepSize * Math.sin(currentRotation.y / 180 * Math.PI)} ${currentPosition.y} ${currentPosition.z + stepSize * Math.cos(currentRotation.y / 180 * Math.PI)}`);
          break;
        case "right":
          entity.setAttribute("position", `${currentPosition.x - stepSize * Math.cos(currentRotation.y / 180 * Math.PI)} ${currentPosition.y} ${currentPosition.z + stepSize * Math.sin(currentRotation.y / 180 * Math.PI)}`);
          break;
        case "left":
          entity.setAttribute("position", `${currentPosition.x + stepSize * Math.cos(currentRotation.y / 180 * Math.PI)} ${currentPosition.y} ${currentPosition.z - stepSize * Math.sin(currentRotation.y / 180 * Math.PI)}`);
          break;
      }
    },
    startTimer(direction) {
      this.timer = setInterval(() => {
        this.handleClick(direction);
      }, this.interval);
    },
    stopTimer() {
      clearInterval(this.timer);
    }
  },
  mounted() {
    window.addEventListener("keydown", (event) => {
      if (event.code.startsWith("Arrow")) {
        const direction = event.code.substring(5).toLowerCase();
        this.startTimer(direction);
      }
    });
    window.addEventListener("keyup", (event) => {
      if (event.code.startsWith("Arrow")) {
        this.stopTimer();
      }
    });
  }
};
const Controls_vue_vue_type_style_index_0_scoped_d9ad4861_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Arrow = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "controls" }, _attrs))} data-v-d9ad4861><button class="up" data-v-d9ad4861>`);
  _push(ssrRenderComponent(_component_Arrow, { class: "arrow" }, null, _parent));
  _push(`</button><button class="left" data-v-d9ad4861>`);
  _push(ssrRenderComponent(_component_Arrow, { class: "arrow" }, null, _parent));
  _push(`</button><button class="down" data-v-d9ad4861>`);
  _push(ssrRenderComponent(_component_Arrow, { class: "arrow" }, null, _parent));
  _push(`</button><button class="right" data-v-d9ad4861>`);
  _push(ssrRenderComponent(_component_Arrow, { class: "arrow" }, null, _parent));
  _push(`</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Controls.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d9ad4861"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=Controls-080c51e1.js.map
