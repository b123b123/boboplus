"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const input_vue_vue_type_script_setup_true_lang = require("./input.vue.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Input = withInstall(input_vue_vue_type_script_setup_true_lang.default);
exports.Input = Input;
exports.default = Input;
