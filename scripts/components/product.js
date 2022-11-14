import STORE from "../store.js";

export function ProductComponent(product) {

  return `
  <div data-id=${product.id}
  class='flex flex-col h-full bg-white p-8 rounded-xl gap-y-4 cursor-pointer hover:scale-105 hover:duration-100'>
    <div class='flex justify-between w-full'>
      <button id="edit-product-btn">
        <i class="fa-solid fa-pen-to-square fill-[#326273] text-lg semibold cursor-pointer hover:bg-[#326273] hover:fill-white hover:duration-100 rounded-sm"></i>
      </button>
      <button id="delete-product-btn">
        <i class="fa-sharp fa-solid fa-trash fill-red-500 text-lg semibold cursor-pointer hover:bg-red-500 hover:fill-white hover:duration-100 rounded-sm"></i>
      </button>
    </div>
    <a href="" id="show-product" class="product">
      <figure class='flex items-center justify-center'>
        <img src=${ product.url_image ? product.url_image : ""} alt=${product.name ? product.name : "" } class='w-56'/>
      </figure>
    </a>
    <div class='flex flex-col gap-y-3'>
      <p class='text-slate-400'>${ product.category ? JSON.stringify(STORE.categories.find(({id})=> id == product.category ).name).toUpperCase() : ""}</p>
      <p class=''>${ product.name ? product.name : ""}</p>
      <div class="flex">
        <p class='text-slate-400'>S/${product.price ? product.price : 0}</p>
        <p class='text-slate-400 ml-16'>${product.discount == 0 ? "" : `-${product.discount}%`}</p>
      </div>
      <div class='p-2 bg-slate-400 text-white w-32 rounded-md'>ENVÍO RÁPIDO</div>
      <div class='flex flex-col gap-2'>
        <div class='flex flex-row gap-4 items-center'>
          <i class="fa-solid fa-store"></i>
          <p>Retiro en tienda</p>
        </div>
      </div>
    </div>
  </div>
  `
}

