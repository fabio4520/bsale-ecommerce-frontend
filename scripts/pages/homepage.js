import { NavBar } from "../components/navbar.js";
import { listenCategoriesBtn, listenHomeBtn, listenLogo, listenProductsBtn } from "../utils/listeners.js";

function render() {
  return `
  <div class='pr-10 pl-10 pt-4 pb-4 bg-[#eeeeee] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
    ${NavBar()}
  </div>
  `;
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