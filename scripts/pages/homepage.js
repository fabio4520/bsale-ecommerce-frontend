import { NavBar } from "../components/navbar.js";
import DOMHandler from "../dom-handler.js"
import { ProductsPage } from "./products.js";

function render() {
  return `
  <div class='flex justify-center items-center'>
    ${NavBar()}
  </div>
  `;
}

function listenHomeBtn() {
  const homeAnchor = document.querySelector("#home-btn")
  homeAnchor.addEventListener("click", (event) => {
    event.preventDefault();
    DOMHandler.reload();
  })
}
function listenProductsBtn() {
  const productsAnchor = document.querySelector("#products-btn")
  productsAnchor.addEventListener("click", (e)=> {
    e.preventDefault();
    DOMHandler.load(ProductsPage)
  })
}
function listenCategoriesBtn() {
  const categoriesAnchor = document.querySelector("#categories-btn")
  categoriesAnchor.addEventListener("click", (e) => {
    e.preventDefault();
  })
}
function listenLogo() {
  const logoBtn = document.querySelector("#logo-btn");
  logoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    DOMHandler.load(HomePage);
  })
}
export const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    listenHomeBtn(),
    listenProductsBtn(),
      listenCategoriesBtn(),
      listenLogo()
  }
}