const DOMHandler = (function (parentSelector) {
  const parent = document.querySelector(parentSelector);

  if (!parent) throw new Error("Can't find parent");

  return {
    module: null,
    load(module) {
      this.module = module;
      parent.innerHTML = module;
      module.addListeners();
    },
    reload() {
      this.load(this.module);
    },
  };

})("body");

export default DOMHandler;
