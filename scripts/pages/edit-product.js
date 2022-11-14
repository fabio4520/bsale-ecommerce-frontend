import { FormProduct } from "../components/form-product.js";
import { NavBar } from "../components/navbar.js";
import DOMHandler from "../dom-handler.js";
import {  editProduct } from "../services/products-service.js";
import STORE from "../store.js";
import { listenCategoriesBtn, listenHomeBtn, listenLogo } from "../utils/listeners.js";
import { HomePage } from "./homepage.js";

function render() {
  return `
  <div class='pr-10 pl-10 pt-4 pb-4 bg-[#eeeeee] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
    ${NavBar()}
    <div class='flex gap-8 flex-col mt-4 items-center justify-center'>
      <h1 class='text-center font-bold tracking-[15px] uppercase text-3xl'>Edit Product</h1>
      <div class='flex gap-x-10 p-10'>
        ${FormProduct()}
      </div>
    </div>
  </div>
  `
}

function listenSubmitForm() {
  const form = document.querySelector(".form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name, category, price, discount, url_image } = event.target;
    const credentials = {
      name: name.value,
      category: parseInt(category.value),
      price: parseInt(price.value),
      discount: parseInt(discount.value),
      url_image: url_image.value
    }
    let product = await editProduct(STORE.currentProduct.id, credentials);
    STORE.updateProduct(STORE.currentProduct.id, product);
    await STORE.cleanCurrentProduct();
    DOMHandler.load(HomePage)
  })
}

export const EditProductPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenHomeBtn(),
    listenCategoriesBtn(),
      listenLogo(),
      listenSubmitForm()
  }
}