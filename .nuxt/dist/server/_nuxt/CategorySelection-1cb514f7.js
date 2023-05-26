import __nuxt_component_0 from "./Button-a6363d5a.js";
import { gql } from "graphql-tag";
import { e as useAsyncQuery, _ as _export_sfc } from "../server.mjs";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "defu";
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
const CategorySelection_vue_vue_type_style_index_0_scoped_9fbfe7d1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/CategorySelection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fbfe7d1"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=CategorySelection-1cb514f7.js.map
