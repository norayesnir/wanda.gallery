import __nuxt_component_0 from "./Button-a6363d5a.js";
import { defineComponent, unref, useSSRContext } from "vue";
import "hookable";
import { g as useRoute, e as useAsyncQuery, _ as _export_sfc } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { gql } from "graphql-tag";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@vue/devtools-api";
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    let categoryId;
    if (Array.isArray(route.params.id)) {
      categoryId = parseInt(route.params.id[0]);
    } else {
      categoryId = parseInt(route.params.id);
    }
    const query = gql`
  query($categoryId: Int!) {
    rooms(category_id: $categoryId) {
      data {
        id
        title
        intro
        cover_url
      }
    }
  }
`;
    const { data, error, refresh } = useAsyncQuery(query, { categoryId });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TemplateButton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-05dd2553>`);
      if (unref(data) && unref(data).rooms && unref(data).rooms.data) {
        _push(`<div class="room-selection" data-v-05dd2553><!--[-->`);
        ssrRenderList(unref(data).rooms.data, (room, id) => {
          _push(`<div class="room" data-v-05dd2553><img class="image"${ssrRenderAttr("src", room.cover_url)}${ssrRenderAttr("alt", room.cover_url)} data-v-05dd2553><div class="content" data-v-05dd2553><h3 data-v-05dd2553>${ssrInterpolate(room.title)}</h3><p data-v-05dd2553>${ssrInterpolate(room.intro)}</p>`);
          _push(ssrRenderComponent(_component_TemplateButton, {
            name: "View this project",
            to: `rooms/${room.id}`
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _id__vue_vue_type_style_index_0_scoped_05dd2553_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05dd2553"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-04e0dafa.js.map
