import DOMHandler from "./scripts/dom-handler.js"
import { HomePage } from "./scripts/pages/homepage.js"
import { ProductsPage } from "./scripts/pages/products.js";
import STORE from "./scripts/store.js";

async function init() {
  // DOMHandler.load(HomePage);
  await STORE.fetchProducts();
  DOMHandler.load(ProductsPage);
}

init()