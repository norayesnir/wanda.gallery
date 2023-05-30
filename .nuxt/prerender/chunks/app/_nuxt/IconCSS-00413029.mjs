import { useSSRContext, defineComponent, computed, unref, mergeProps } from 'file:///Users/rinseyaron/wanda.gallery/node_modules/vue/index.mjs';
import { _ as _export_sfc, n as useAppConfig } from '../server.mjs';
import { ssrRenderAttrs } from 'file:///Users/rinseyaron/wanda.gallery/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconCSS",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const appConfig = useAppConfig();
    ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const iconUrl = computed(() => `url('https://api.iconify.design/${iconName.value.replace(":", "/")}.svg')`);
    const sSize = computed(() => {
      var _a2, _b, _c;
      if (!props.size && typeof ((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--71ded496": unref(iconUrl)
      } };
      _push(`<span${ssrRenderAttrs(mergeProps({
        style: { width: unref(sSize), height: unref(sSize) }
      }, _attrs, _cssVars))} data-v-11604bcf></span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/IconCSS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconCSS = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11604bcf"]]);

export { IconCSS as default };
//# sourceMappingURL=IconCSS-00413029.mjs.map