import { _ as __nuxt_component_0 } from './ControlsPopup-8b0a8025.mjs';
import { gql } from 'file:///Users/rinseyaron/wanda.gallery/node_modules/graphql-tag/main.js';
import { l as _export_sfc, v as useAsyncQuery } from '../server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode } from 'file:///Users/rinseyaron/wanda.gallery/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderAttrs } from 'file:///Users/rinseyaron/wanda.gallery/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/hookable/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unctx/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/destr/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/klona/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/unhead/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/h3/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/ufo/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/ts-invariant/lib/invariant.cjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/graphql/index.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/zen-observable-ts/index.cjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/ohash/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/optimism/lib/bundle.cjs.js';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@wry/equality/lib/bundle.cjs';
import 'file:///Users/rinseyaron/wanda.gallery/node_modules/@wry/trie/lib/trie.js';
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

const numEntities = 10;
const radius = 20;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Homepage",
  __ssrInlineRender: true,
  setup(__props) {
    const query = gql`
  query {
    artworks(per_page: 10, page: 1) {
      data {
        id
        title
        description
        date
        url
        room_id
      }
    }
  }
`;
    const { data, error, refresh } = useAsyncQuery(query);
    const circleCenterPosition = { x: 0, y: 2, z: 0 };
    const entities = ref([]);
    const positionEntitiesInCircle = () => {
      const angleIncrement = 2 * Math.PI / numEntities;
      for (let i = 0; i < numEntities; i++) {
        const angle = i * angleIncrement;
        const x = circleCenterPosition.x + radius * Math.cos(angle);
        const y = circleCenterPosition.y;
        const z = circleCenterPosition.z + radius * Math.sin(angle);
        const rotationAngle = Math.atan2(circleCenterPosition.x - x, circleCenterPosition.z - z) * (180 / Math.PI);
        const rotation = `0 ${rotationAngle} 0`;
        const entity = {
          position: `${x} ${y} ${z}`,
          rotation,
          text: `Entity${i + 1}`
        };
        entities.value.push(entity);
      }
    };
    positionEntitiesInCircle();
    const kebabCase = (str) => str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).join("-").toLowerCase();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_scene = resolveComponent("a-scene");
      const _component_a_assets = resolveComponent("a-assets");
      const _component_a_entity = resolveComponent("a-entity");
      const _component_a_image = resolveComponent("a-image");
      const _component_a_text = resolveComponent("a-text");
      _push(ssrRenderComponent(_component_a_scene, mergeProps({ "loading-screen": "backgroundColor: black; dotsColor: white;" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_assets, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(data).artworks.data, (artwork, index2) => {
                    _push3(`<img${ssrRenderAttr("id", kebabCase(artwork.title))}${ssrRenderAttr("src", artwork.url)} crossorigin="anonymous"${_scopeId2}>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).artworks.data, (artwork, index2) => {
                      return openBlock(), createBlock("img", {
                        id: kebabCase(artwork.title),
                        src: artwork.url,
                        crossorigin: "anonymous"
                      }, null, 8, ["id", "src"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_entity, { id: "mario" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(data).artworks.data, (artwork, index2) => {
                    _push3(ssrRenderComponent(_component_a_entity, {
                      key: artwork.id,
                      position: entities.value[index2].position,
                      rotation: entities.value[index2].rotation
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_image, {
                            src: artwork.url,
                            alt: kebabCase(artwork.title),
                            id: kebabCase(artwork.title),
                            width: "1.6",
                            height: "2"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_a_text, {
                            class: "title",
                            baseline: "bottom",
                            position: "1 .7 0",
                            value: artwork.title
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_a_text, {
                            class: "description",
                            baseline: "top",
                            position: "1 .5 0",
                            value: artwork.description
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_image, {
                              src: artwork.url,
                              alt: kebabCase(artwork.title),
                              id: kebabCase(artwork.title),
                              width: "1.6",
                              height: "2"
                            }, null, 8, ["src", "alt", "id"]),
                            createVNode(_component_a_text, {
                              class: "title",
                              baseline: "bottom",
                              position: "1 .7 0",
                              value: artwork.title
                            }, null, 8, ["value"]),
                            createVNode(_component_a_text, {
                              class: "description",
                              baseline: "top",
                              position: "1 .5 0",
                              value: artwork.description
                            }, null, 8, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).artworks.data, (artwork, index2) => {
                      return openBlock(), createBlock(_component_a_entity, {
                        key: artwork.id,
                        position: entities.value[index2].position,
                        rotation: entities.value[index2].rotation
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_image, {
                            src: artwork.url,
                            alt: kebabCase(artwork.title),
                            id: kebabCase(artwork.title),
                            width: "1.6",
                            height: "2"
                          }, null, 8, ["src", "alt", "id"]),
                          createVNode(_component_a_text, {
                            class: "title",
                            baseline: "bottom",
                            position: "1 .7 0",
                            value: artwork.title
                          }, null, 8, ["value"]),
                          createVNode(_component_a_text, {
                            class: "description",
                            baseline: "top",
                            position: "1 .5 0",
                            value: artwork.description
                          }, null, 8, ["value"])
                        ]),
                        _: 2
                      }, 1032, ["position", "rotation"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_assets, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data).artworks.data, (artwork, index2) => {
                    return openBlock(), createBlock("img", {
                      id: kebabCase(artwork.title),
                      src: artwork.url,
                      crossorigin: "anonymous"
                    }, null, 8, ["id", "src"]);
                  }), 256))
                ]),
                _: 1
              }),
              createVNode(_component_a_entity, { id: "mario" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data).artworks.data, (artwork, index2) => {
                    return openBlock(), createBlock(_component_a_entity, {
                      key: artwork.id,
                      position: entities.value[index2].position,
                      rotation: entities.value[index2].rotation
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_image, {
                          src: artwork.url,
                          alt: kebabCase(artwork.title),
                          id: kebabCase(artwork.title),
                          width: "1.6",
                          height: "2"
                        }, null, 8, ["src", "alt", "id"]),
                        createVNode(_component_a_text, {
                          class: "title",
                          baseline: "bottom",
                          position: "1 .7 0",
                          value: artwork.title
                        }, null, 8, ["value"]),
                        createVNode(_component_a_text, {
                          class: "description",
                          baseline: "top",
                          position: "1 .5 0",
                          value: artwork.description
                        }, null, 8, ["value"])
                      ]),
                      _: 2
                    }, 1032, ["position", "rotation"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/rooms/Homepage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ControlsPopup = __nuxt_component_0;
  const _component_RoomsHomepage = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-97fca802>`);
  _push(ssrRenderComponent(_component_ControlsPopup, null, null, _parent));
  _push(`<div class="flex" data-v-97fca802>`);
  _push(ssrRenderComponent(_component_RoomsHomepage, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-97fca802"]]);

export { index as default };
//# sourceMappingURL=index-9df9d4d2.mjs.map
