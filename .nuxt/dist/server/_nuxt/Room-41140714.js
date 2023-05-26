import { gql } from "graphql-tag";
import { e as useAsyncQuery } from "../server.mjs";
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
const numEntities = 10;
const radius = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Room",
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
      _push(ssrRenderComponent(_component_a_scene, mergeProps({
        "loading-screen": "backgroundColor: black; dotsColor: white;",
        "vr-mode-ui": "enabled: false"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_assets, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(data).artworks.data, (artwork, index) => {
                    _push3(`<img${ssrRenderAttr("id", kebabCase(artwork.title))}${ssrRenderAttr("src", artwork.url)} crossorigin="anonymous"${_scopeId2}>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).artworks.data, (artwork, index) => {
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
                  ssrRenderList(unref(data).artworks.data, (artwork, index) => {
                    _push3(ssrRenderComponent(_component_a_entity, {
                      key: artwork.id,
                      position: entities.value[index].position,
                      rotation: entities.value[index].rotation
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_image, {
                            src: "androids/adran-engineered-arts-uk-wanda-tuerlinckx.webp",
                            alt: kebabCase(artwork.title),
                            id: kebabCase(artwork.title),
                            width: "1.6",
                            height: "2"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_a_text, {
                            class: "title",
                            width: "7",
                            baseline: "bottom",
                            position: "1 .7 0",
                            value: artwork.title
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_a_text, {
                            class: "description",
                            baseline: "top",
                            position: "1 .5 0",
                            value: `${artwork.description}`
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_image, {
                              src: "androids/adran-engineered-arts-uk-wanda-tuerlinckx.webp",
                              alt: kebabCase(artwork.title),
                              id: kebabCase(artwork.title),
                              width: "1.6",
                              height: "2"
                            }, null, 8, ["alt", "id"]),
                            createVNode(_component_a_text, {
                              class: "title",
                              width: "7",
                              baseline: "bottom",
                              position: "1 .7 0",
                              value: artwork.title
                            }, null, 8, ["value"]),
                            createVNode(_component_a_text, {
                              class: "description",
                              baseline: "top",
                              position: "1 .5 0",
                              value: `${artwork.description}`
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).artworks.data, (artwork, index) => {
                      return openBlock(), createBlock(_component_a_entity, {
                        key: artwork.id,
                        position: entities.value[index].position,
                        rotation: entities.value[index].rotation
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_image, {
                            src: "androids/adran-engineered-arts-uk-wanda-tuerlinckx.webp",
                            alt: kebabCase(artwork.title),
                            id: kebabCase(artwork.title),
                            width: "1.6",
                            height: "2"
                          }, null, 8, ["alt", "id"]),
                          createVNode(_component_a_text, {
                            class: "title",
                            width: "7",
                            baseline: "bottom",
                            position: "1 .7 0",
                            value: artwork.title
                          }, null, 8, ["value"]),
                          createVNode(_component_a_text, {
                            class: "description",
                            baseline: "top",
                            position: "1 .5 0",
                            value: `${artwork.description}`
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
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data).artworks.data, (artwork, index) => {
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
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data).artworks.data, (artwork, index) => {
                    return openBlock(), createBlock(_component_a_entity, {
                      key: artwork.id,
                      position: entities.value[index].position,
                      rotation: entities.value[index].rotation
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_image, {
                          src: "androids/adran-engineered-arts-uk-wanda-tuerlinckx.webp",
                          alt: kebabCase(artwork.title),
                          id: kebabCase(artwork.title),
                          width: "1.6",
                          height: "2"
                        }, null, 8, ["alt", "id"]),
                        createVNode(_component_a_text, {
                          class: "title",
                          width: "7",
                          baseline: "bottom",
                          position: "1 .7 0",
                          value: artwork.title
                        }, null, 8, ["value"]),
                        createVNode(_component_a_text, {
                          class: "description",
                          baseline: "top",
                          position: "1 .5 0",
                          value: `${artwork.description}`
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Room.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Room-41140714.js.map
