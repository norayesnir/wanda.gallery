import { o as defineStore, l as _export_sfc, p as useNavigationMenuStore, r as storeToRefs, n as useNuxtApp, t as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, defineComponent, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "uuid-4b29ea88-df0e-43d3-aa9d-50ffb078ea7d",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12.52 11.34"
  }, _attrs))}><g id="uuid-adae3106-a4bb-4cf2-8f28-245c340616f7"><path d="m6.26,1c.15,0,.53.04.76.44l4.38,7.59c.23.39.08.74,0,.87s-.3.44-.76.44H1.87c-.46,0-.68-.31-.76-.44s-.23-.48,0-.87L5.49,1.44c.23-.39.6-.44.76-.44m0-1c-.63,0-1.26.31-1.62.94L.25,8.53c-.72,1.25.18,2.81,1.62,2.81h8.77c1.44,0,2.34-1.56,1.62-2.81L7.88.94c-.36-.62-.99-.94-1.62-.94h-.01Z" style="${ssrRenderStyle({ "fill": "#fff" })}"></path></g></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Arrow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Arrow = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "controls" }, _attrs))} data-v-a060f377><button class="up" data-v-a060f377>`);
  _push(ssrRenderComponent(_component_Arrow, { class: "arrow" }, null, _parent));
  _push(`</button><button class="left" data-v-a060f377>`);
  _push(ssrRenderComponent(_component_Arrow, { class: "arrow" }, null, _parent));
  _push(`</button><button class="down" data-v-a060f377>`);
  _push(ssrRenderComponent(_component_Arrow, { class: "arrow" }, null, _parent));
  _push(`</button><button class="right" data-v-a060f377>`);
  _push(ssrRenderComponent(_component_Arrow, { class: "arrow" }, null, _parent));
  _push(`</button></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Controls.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a060f377"]]);
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
      const _component_Icon = __nuxt_component_0$2;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ControlsPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f22e8a76"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ControlsPopup-8b0a8025.mjs.map
