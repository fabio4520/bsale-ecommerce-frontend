import apiFetch from "./apit-fetch.js";

export async function getProducts() {
  return apiFetch("products")
}

export async function createProduct(
  newProduct = { name, category, price, discount, url_image }
) {
  return apiFetch("products", { body: newProduct })
}

export async function editProduct(
  id,
  payload = { name, category, price, discount, url_image }
) {
  const product= await apiFetch("products/" + id, {
    method: "PATCH",
    body: payload,
  });
  return product;
}

export async function deleteProduct(productId) {
  return apiFetch("products/" + productId, { method: "DELETE" });
}
