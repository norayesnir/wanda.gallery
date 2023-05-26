import { d as defineStore, _ as _export_sfc, a as useNavigationMenuStore, s as storeToRefs, u as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import __nuxt_component_1 from './Controls-080c51e1.mjs';
import { useSSRContext, defineComponent, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './Arrow-6abaaf87.mjs';

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
      const _component_Icon = __nuxt_component_0$1;
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
const ControlsPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f22e8a76"]]);

export { ControlsPopup as default };
//# sourceMappingURL=ControlsPopup-3efc6766.mjs.map
