import apiFetch from "./apit-fetch.js";

export async function getProducts() {
  return apiFetch("products")
}

export async function createProduct(
  newProduct = { name, category, price, discount, url_image }
) {
  return apiFetch("products", { body: newProduct })
}
