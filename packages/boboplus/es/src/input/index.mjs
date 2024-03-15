import _sfc_main from "./input.vue.mjs";
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Input = withInstall(_sfc_main);
export {
  Input,
  Input as default
};
