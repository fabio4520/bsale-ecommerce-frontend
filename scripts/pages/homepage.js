import { NavBar } from "../components/navbar.js";
import { ProductComponent } from "../components/product.js";
import DOMHandler from "../dom-handler.js";
import { deleteProduct } from "../services/products-service.js";
import STORE from "../store.js";
import { listenCategoriesBtn, listenHomeBtn, listenLogo } from "../utils/listeners.js";
import { CreateProductPage } from "./create-product.js";
import { EditProductPage } from "./edit-product.js";

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

function listenEditProduct() {
  const edit_prod_btn_arr = document.querySelectorAll("#edit-product-btn");
  edit_prod_btn_arr.forEach((edit_btn) => {
    edit_btn.addEventListener("click", async (ev) => {
      ev.preventDefault();
      const prod_id_data = event.target.closest("[data-id]");
      const prod_id = prod_id_data.dataset.id;
      await STORE.setCurrentProduct(prod_id)
      DOMHandler.load(EditProductPage);
    })
  })
}

function listenDeleteProduct() {
  const delete_prod_btn_arr = document.querySelectorAll("#delete-product-btn");
  delete_prod_btn_arr.forEach((delete_btn) => {
    delete_btn.addEventListener("click", async (ev) => {
      ev.preventDefault();
      const prod_id_data = event.target.closest("[data-id]");
      const prod_id = prod_id_data.dataset.id;
      await STORE.deleteProduct(prod_id)
      await deleteProduct(prod_id)
      location.reload();
    })
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
      listenAddProduct(),
      listenEditProduct(),
      listenDeleteProduct()
  }
}