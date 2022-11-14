import DOMHandler from "../dom-handler.js";
import { HomePage } from "../pages/homepage.js";
import { ProductsPage } from "../pages/products.js";


export function listenHomeBtn() {
  const homeAnchor = document.querySelector("#home-btn")
  homeAnchor.addEventListener("click", (event) => {
    event.preventDefault();
    DOMHandler.load(HomePage);
  })
}
export function listenProductsBtn() {
  const productsAnchor = document.querySelector("#products-btn")
  productsAnchor.addEventListener("click", (e)=> {
    e.preventDefault();
    DOMHandler.load(ProductsPage)
  })
}
export function listenCategoriesBtn() {
  const categoriesAnchor = document.querySelector("#categories-btn")
  categoriesAnchor.addEventListener("click", (e) => {
    e.preventDefault();
  })
}
export function listenLogo() {
  const logoBtn = document.querySelector("#logo-btn");
  logoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    DOMHandler.load(HomePage);
  })
}
