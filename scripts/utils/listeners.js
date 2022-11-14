import DOMHandler from "../dom-handler.js";
import { CategoriesPage } from "../pages/categories.js";
import { HomePage } from "../pages/homepage.js";
import { ProductsPage } from "../pages/products.js";
import STORE from "../store.js";


export function listenHomeBtn() {
  const homeAnchor = document.querySelector("#home-btn")
  homeAnchor.addEventListener("click", async (e) => {
    e.preventDefault();
    await STORE.fetchProducts();
    await STORE.fetchCategories();
    DOMHandler.load(HomePage);
  })
}
export function listenProductsBtn() {
  const productsAnchor = document.querySelector("#products-btn")
  productsAnchor.addEventListener("click", async (e)=> {
    e.preventDefault();
    await STORE.fetchProducts();
    await STORE.fetchCategories();
    DOMHandler.load(ProductsPage)
  })
}
export function listenCategoriesBtn() {
  const categoriesAnchor = document.querySelector("#categories-btn")
  categoriesAnchor.addEventListener("click", async (e) => {
    e.preventDefault();
    await STORE.fetchProducts();
    await STORE.fetchCategories();
    DOMHandler.load(CategoriesPage)
  })
}
export function listenLogo() {
  const logoBtn = document.querySelector("#logo-btn");
  logoBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await STORE.fetchProducts();
    await STORE.fetchCategories();
    DOMHandler.load(HomePage);
  })
}
