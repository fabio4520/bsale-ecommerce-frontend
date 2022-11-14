import { NavBar } from "../components/navbar.js";
import { ProductComponent } from "../components/product.js";
import DOMHandler from "../dom-handler.js";
import STORE from "../store.js";
import { listenCategoriesBtn, listenHomeBtn, listenLogo } from "../utils/listeners.js";
import { CreateProductPage } from "./create-product.js";

function render() {
  return `
  <div class='pr-10 pl-10 pt-4 pb-4 bg-[#eeeeee] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
    ${NavBar()}
    <div class='flex flex-col gap-y-5'>
      <button id="add-prod-btn" class='bg-[#326273] w-44 p-2 rounded-md flex items-center justify-center gap-x-5 hover:bg-[#326273]/90'>
        <i class="fa-solid fa-circle-plus fill-white text-lg"></i>
        <span class='uppercase text-white tracking-wide'>Add product</span>
      </button>
      <div class='flex flex-wrap gap-10'>
        ${STORE.products.map((product) => ProductComponent(product)).join("")}
      </div>
    </div>
  </div>
  `;
}

function listenShowProduct() {
  const img_product_all = document.querySelectorAll(".product");
  img_product_all.forEach((prod) => {
    prod.addEventListener("click", (ev) => {
      ev.preventDefault();
    })
  })
}

function listenAddProduct() {
  const add_prod_btn = document.querySelector("#add-prod-btn");
  add_prod_btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    DOMHandler.load(CreateProductPage)
  })
}

export const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    listenHomeBtn(),
    listenCategoriesBtn(),
    listenLogo(),
      listenShowProduct(),
      listenAddProduct()
  }
}