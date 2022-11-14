import { NavBar } from "../components/navbar.js";
import { ProductComponent } from "../components/product.js";
import STORE from "../store.js";

function render() {
  return `
  <div class='pr-10 pl-10 pt-4 pb-4 bg-[#eeeeee] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
    ${NavBar()}
    <div class='flex flex-col gap-y-5'>
      <button class='bg-[#326273] w-44 p-2 rounded-md flex items-center justify-center gap-x-5 hover:bg-[#326273]/90'>
        <i class="fa-solid fa-circle-plus fill-white text-lg"></i>
        <span class='uppercase text-white tracking-wide'>Add product</span>
      </button>
      <div class='flex flex-wrap gap-10'>
        ${STORE.products.map((product) => ProductComponent(product)).join("")}
      </div>
    </div>
  </div>

  `
}

export const ProductsPage = {
  toString() {
    return render();
  },
  addListeners() {
  }
}
