"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _hoisted_1 = {
  type: "text",
  placeholder: "请输入组件名称"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "bo-input"
  },
  __name: "input",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("input", _hoisted_1);
    };
  }
});
exports.default = _sfc_main;
