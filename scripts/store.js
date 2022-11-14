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

function setCurrentProduct(productId) {
  this.currentProduct = this.products.find((prod) => prod.id == productId)
}

function cleanCurrentProduct() {
  this.currentProduct = null
}

function updateProduct( productId, product) {
  const index = this.products.findIndex((element) => element.id == productId);
  this.products[index] = product
}
function deleteProduct( productId) {
  const index = this.products.findIndex((element) => element.id == productId);
  this.products.slice(index, 1)
}

let STORE = {
  products: [],
  categories: [],
  currentProduct: null,
  fetchProducts,
  fetchCategories,
  setProductsByCategoryId,
  setCurrentProduct,
  cleanCurrentProduct,
  updateProduct,
  deleteProduct
}

export default STORE;