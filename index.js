import DOMHandler from "./scripts/dom-handler.js"
import { HomePage } from "./scripts/pages/homepage.js"
import { ProductsPage } from "./scripts/pages/products.js";

function init() {
  // DOMHandler.load(HomePage);
  DOMHandler.load(ProductsPage);
}

init()