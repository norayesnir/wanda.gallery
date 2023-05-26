import { _ as _export_sfc, b as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    let date = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-18056307><div class="content" data-v-18056307><p data-v-18056307> info@wanda.gallery</p><p data-v-18056307> \xA9 Copyright Wanda Tuerlinckx \u2014 All rights reserved ${ssrInterpolate(unref(date))}</p></div><div class="socials" data-v-18056307><a href="https://www.facebook.com/wanda.tuerlinckx" data-v-18056307>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bxl:facebook",
        class: "facebook",
        size: "24"
      }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/in/wanda-tuerlinckx-3618ab104/" data-v-18056307>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bxl:linkedin",
        class: "linkedin",
        size: "24"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/wandatuerlinckxphotography/" data-v-18056307>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "bxl:instagram",
        class: "instagram",
        size: "24"
      }, null, _parent));
      _push(`</a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18056307"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=AppFooter-16a5d0f3.mjs.map
