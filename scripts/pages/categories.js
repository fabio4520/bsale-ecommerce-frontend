import { NavBar } from "../components/navbar.js";
import { listenCategoriesBtn, listenHomeBtn, listenLogo } from "../utils/listeners.js";
import STORE from "../store.js";
import { CategoryComponent } from "../components/category.js";
import DOMHandler from "../dom-handler.js";
import { ProductsPage } from "./products.js";

function render() {
  return `
  <div class='pr-10 pl-10 pt-4 pb-4 bg-[#eeeeee] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
    ${NavBar()}
    <div class='flex flex-row justify-center items-center gap-4 flex-wrap'>
      ${STORE.categories.map((cat)=> CategoryComponent(cat)).join("")}
    </div>
  </div>

  `
}

function listenShowCategory() {
  let categories_cards = document.querySelectorAll(".category")
  categories_cards.forEach((card) => {
    card.addEventListener("click", async (event) => {
      event.preventDefault();
      const card_selected = event.target.closest("[data-id]");
      const id = card_selected.dataset.id
      await STORE.setProductsByCategoryId(id);
      DOMHandler.load(ProductsPage)
    })
  })
}


export const CategoriesPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenHomeBtn(),
    listenCategoriesBtn(),
      listenLogo(),
      listenShowCategory()
  }
}
