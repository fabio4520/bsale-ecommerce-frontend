import DOMHandler from "../dom-handler.js";
import { CategoriesPage } from "../pages/categories.js";
import { HomePage } from "../pages/homepage.js";
import STORE from "../store.js";


export function listenHomeBtn() {
  const homeAnchor = document.querySelector("#home-btn")
  homeAnchor.addEventListener("click", async (e) => {
    e.preventDefault();
    await STORE.fetchProducts();
    await STORE.fetchCategories();
    await STORE.cleanCurrentProduct();
    DOMHandler.load(HomePage);
  })
}
export function listenCategoriesBtn() {
  const categoriesAnchor = document.querySelector("#categories-btn")
  categoriesAnchor.addEventListener("click", async (e) => {
    e.preventDefault();
    await STORE.fetchProducts();
    await STORE.fetchCategories();
    await STORE.cleanCurrentProduct();
    DOMHandler.load(CategoriesPage)
  })
}
export function listenLogo() {
  const logoBtn = document.querySelector("#logo-btn");
  logoBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await STORE.fetchProducts();
    await STORE.fetchCategories();
    await STORE.cleanCurrentProduct();
    DOMHandler.load(HomePage);
  })
}
