import { getCategories } from "./services/categories-service.js";
import { getProducts } from "./services/products-service.js";

async function fetchProducts() {
  const all_products = await getProducts();
  this.products = [...all_products]
}

async function fetchCategories() {
  const all_categories = await getCategories();
  this.categories = [...all_categories]
}

function setProductsByCategoryId(categoryId) {
  this.products = this.products.filter((prod)=> prod.category == categoryId)
}

let STORE = {
  products: [],
  categories: [],
  fetchProducts,
  fetchCategories,
  setProductsByCategoryId
}

export default STORE;