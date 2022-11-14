import { NavBar } from "../components/navbar.js";
import DOMHandler from "../dom-handler.js";
import { createProduct } from "../services/products-service.js";
import STORE from "../store.js";
import { listenCategoriesBtn, listenHomeBtn, listenLogo } from "../utils/listeners.js";
import { HomePage } from "./homepage.js";

function render() {
  return `
  <div class='pr-10 pl-10 pt-4 pb-4 bg-[#eeeeee] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
    ${NavBar()}
    <div class='flex gap-8 flex-col mt-4 items-center justify-center'>
      <h1 class='text-center font-bold tracking-[15px] uppercase text-3xl'>New Product</h1>
      <div class='flex gap-x-10 p-10'>
        <form class="form flex flex-col gap-y-5 bg-white shadow-md rounded  mb-4 items-center justify-center p-10">
          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Name</label>
            <input name="name" 
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" />
          </div>

          <div class="mb-4">
            <label class='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Category</label>
            <select name="category" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="" disabled selected hidden>Select category</option>
              ${
                STORE.categories.map((cat) => `
                  <option value=${cat.id}>${cat.name}</option>            
                `).join("")
              }
            </select>
          </div>

          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Price</label>
            <input name="price"
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" />
          </div>

          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Discount</label>
            <input name="discount"
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" />
          </div>

          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Url Image</label>
            <input name="url_image"
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" />
          </div>

          <input class='bg-[#326273] hover:bg-[#326273]/80 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline tracking-widest w-32' type="submit"/>
        </form>
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
      category: category.value,
      price: price.value,
      discount: discount.value,
      url_image: url_image.value
    }
    console.log(credentials)
    const product = await createProduct(credentials);
    STORE.products.push(product);
    DOMHandler.load(HomePage)
  })
}

export const CreateProductPage = {
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