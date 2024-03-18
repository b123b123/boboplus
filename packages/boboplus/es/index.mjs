import * as index$1 from "./src/index.mjs";
import { Button } from "./src/button/index.mjs";
import { Input } from "./src/input/index.mjs";
const index = {
  install: (app) => {
    for (let c in index$1) {
      app.use(index$1[c]);
    }
  }
};
export {
  Button,
  Input,
  index as default
};
