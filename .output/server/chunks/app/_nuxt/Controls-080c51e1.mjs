import __nuxt_component_0 from './Arrow-6abaaf87.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'klona';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'ts-invariant';
import 'graphql';
import 'zen-observable-ts';
import 'ohash';
import 'cookie-es';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'graphql-tag';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';

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

export { __nuxt_component_1 as default };
//# sourceMappingURL=Controls-080c51e1.mjs.map
