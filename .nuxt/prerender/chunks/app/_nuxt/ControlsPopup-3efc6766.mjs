import { d as defineStore, _ as _export_sfc, a as useNavigationMenuStore, s as storeToRefs, u as useNuxtApp, b as __nuxt_component_0$1 } from '../server.mjs';
import __nuxt_component_1 from './Controls-080c51e1.mjs';
import { useSSRContext, defineComponent, unref, mergeProps } from 'file:///Users/rinseyaron/wanda.gallery/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/rinseyaron/wanda.gallery/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/hookable/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unctx/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/destr/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/klona/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/h3/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unhead/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/ufo/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/ts-invariant/lib/invariant.cjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/graphql/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/zen-observable-ts/index.cjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/ohash/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/optimism/lib/bundle.cjs.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@wry/equality/lib/bundle.cjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@wry/trie/lib/trie.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/graphql-tag/main.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/scule/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/radix3/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/pathe/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unified/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/micromark-util-character/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/remark-emoji/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/rehype-slug/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/rehype-external-links/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/remark-gfm/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/rehype-raw/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/remark-parse/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/remark-rehype/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/detab/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unist-builder/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/mdurl/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/slugify/slugify.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unist-util-position/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unist-util-visit/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unenv/runtime/npm/consola.mjs';
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
