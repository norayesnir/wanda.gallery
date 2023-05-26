import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  name: "Aframe",
  props: {
    scene: {
      type: String,
      required: true,
      default: '<a-scene><a-entity><a-text value="No scene rendered" color="#fff" position="0 4 -5" align="center"geometry="primitive: plane; width: 4; height: .5" material="color: #333"></a-text></a-entity></a-scene>'
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "aframe" }, _attrs))} data-v-7740b6ef>${$props.scene}</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Aframe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Aframe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7740b6ef"]]);

export { Aframe as default };
//# sourceMappingURL=Aframe-0382bc9d.mjs.map
