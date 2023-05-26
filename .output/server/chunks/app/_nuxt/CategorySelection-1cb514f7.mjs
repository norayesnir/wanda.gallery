import __nuxt_component_0 from './Button-a6363d5a.mjs';
import { gql } from 'graphql-tag';
import { _ as _export_sfc, e as useAsyncQuery } from '../server.mjs';
import { useSSRContext, defineComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CategorySelection",
  __ssrInlineRender: true,
  setup(__props) {
    const query = gql`
  query {
    categories {
      data {
        id
        title
        intro
        cover_url
      }
    }
  }
`;
    const { data, error, refresh } = useAsyncQuery(query);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TemplateButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9fbfe7d1><h1 data-v-9fbfe7d1>Projects</h1><div class="category-selection" data-v-9fbfe7d1><!--[-->`);
      ssrRenderList(unref(data).categories.data, (category, key) => {
        _push(`<div class="category" data-v-9fbfe7d1><img class="image"${ssrRenderAttr("src", category.cover_url)}${ssrRenderAttr("alt", category.cover_url)} data-v-9fbfe7d1><div class="content" data-v-9fbfe7d1><h3 data-v-9fbfe7d1>${ssrInterpolate(category.title)}</h3><p data-v-9fbfe7d1>${ssrInterpolate(category.intro)}</p>`);
        _push(ssrRenderComponent(_component_TemplateButton, {
          name: "View this project",
          to: `project/${category.id}`
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/CategorySelection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fbfe7d1"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=CategorySelection-1cb514f7.mjs.map
