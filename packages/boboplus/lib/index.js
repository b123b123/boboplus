"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$3 = require("./src/index.js");
const index$1 = require("./src/button/index.js");
const index$2 = require("./src/input/index.js");
const index = {
  install: (app) => {
    for (let c in index$3) {
      app.use(index$3[c]);
    }
  }
};
exports.Button = index$1.Button;
exports.Input = index$2.Input;
exports.default = index;
