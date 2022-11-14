import apiFetch from "./apit-fetch.js";

export async function getCategories() {
  return apiFetch("categories")
}


