import { defineComponent, openBlock, createElementBlock } from "vue";
const _hoisted_1 = {
  type: "text",
  placeholder: "请输入组件名称"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "bo-input"
  },
  __name: "input",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
