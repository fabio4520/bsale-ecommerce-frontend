import apiFetch from "./apit-fetch.js";

export async function getProducts() {
  return apiFetch("products")
}


