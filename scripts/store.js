import { getProducts } from "./services/products-service.js";

async function fetchProducts() {
  const all_products = await getProducts();
  this.products = [...all_products]
}

let STORE = {
  products: [],
  categories: [],
  fetchProducts
}

export default STORE;