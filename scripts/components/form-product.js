import STORE from "../store.js";

export function FormProduct() {
  return `
  <form class="form flex flex-col gap-y-5 bg-white shadow-md rounded  mb-4 items-center justify-center p-10">
    <div class='mb-4'>
      <label class='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Name</label>
      <input name="name" 
        class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" value = ${STORE.currentProduct ? STORE.currentProduct.name : ""}>
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
        class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" value = ${STORE.currentProduct ? STORE.currentProduct.price : ""} >
    </div>

    <div class='mb-4'>
      <label class='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Discount</label>
      <input name="discount"
        class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" value = ${STORE.currentProduct ? STORE.currentProduct.discount : ""} >
    </div>

    <div class='mb-4'>
      <label class='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Url Image</label>
      <input name="url_image"
        class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" value = ${STORE.currentProduct ? STORE.currentProduct.url_image : ""} >
    </div>

    <input class='bg-[#326273] hover:bg-[#326273]/80 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline tracking-widest w-32' type="submit"/>
  </form>
  `
}
