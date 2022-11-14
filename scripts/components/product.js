import STORE from "../store.js";

export function ProductComponent(product) {

  return `
  <div class='flex flex-col h-full bg-white p-8 rounded-xl gap-y-4 cursor-pointer hover:scale-110 hover:duration-100'>
    <figure class='flex items-center justify-center'>
      <img src=${product.url_image} alt=${product.name } class='w-56'/>
    </figure>
    <div class='flex flex-col gap-y-2'>
      <p class='text-slate-400'>${ JSON.stringify(STORE.categories.find(({id})=> id == product.category ).name).toUpperCase() }</p>
      <p class='mb-5'>${product.name}</p>
      <p class='text-slate-400'>S/${product.price}</p>
      <div class='p-2 bg-slate-400 text-white w-32 rounded-md'>ENVÍO RÁPIDO</div>
      <div class='flex flex-col gap-2'>
        <div class='flex flex-row gap-4 items-center'>
          <p>Retiro en tienda</p>
        </div>
      </div>
    </div>
  </div>
  `
}
