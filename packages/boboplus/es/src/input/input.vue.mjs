import { defineComponent, openBlock, createElementBlock } from "vue";
const _hoisted_1 = {
  type: "text",
  placeholder: "请输入组件名称"
};
const __default__ = defineComponent({
  name: "bo-input"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
