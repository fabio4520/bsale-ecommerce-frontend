import { NavBar } from "../components/navbar.js";
import { ProductComponent } from "../components/product.js";

function render() {
  return `
    ${NavBar()}
    <div className='flex flex-col gap-y-5'>
        <button className='bg-[#326273] w-44 p-2 rounded-md flex items-center justify-center gap-x-5 hover:bg-[#326273]/90'>
          <span className='uppercase text-white tracking-wide'>Add product</span>
        </button>
      <div className='flex flex-wrap gap-10 justify-center'>
       
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
