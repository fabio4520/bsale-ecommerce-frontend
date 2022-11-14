import DOMHandler from "./scripts/dom-handler.js"
import { HomePage } from "./scripts/pages/homepage.js"
import { ProductsPage } from "./scripts/pages/products.js";
import STORE from "./scripts/store.js";

async function init() {
  await STORE.fetchProducts();
  await STORE.fetchCategories();
  DOMHandler.load(HomePage);
  // DOMHandler.load(ProductsPage);
}

init()