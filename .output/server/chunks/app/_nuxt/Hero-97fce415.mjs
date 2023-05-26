import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import __nuxt_component_0$1 from './Button-a6363d5a.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
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
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ts-invariant';
import 'graphql';
import 'zen-observable-ts';
import 'cookie-es';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'graphql-tag';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _imports_0 = "" + publicAssetsURL("erica-hiroshi-ishiguro-laboratories-kyoto-japan-wanda-tuerlinckx.webp");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TemplateButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-907129f7><div class="content" data-v-907129f7><h1 data-v-907129f7>Wanda Tuerlinckx Gallery</h1><div class="buttons" data-v-907129f7>`);
  _push(ssrRenderComponent(_component_TemplateButton, {
    to: "/",
    color: "primary",
    name: "Zie mijn werk"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TemplateButton, {
    to: "/",
    color: "secondary",
    name: "Over Mij"
  }, null, _parent));
  _push(`</div></div><img class="image"${ssrRenderAttr("src", _imports_0)} alt="erica-hiroshi-ishiguro-laboratories-kyoto-japan" data-v-907129f7></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-907129f7"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Hero-97fce415.mjs.map
