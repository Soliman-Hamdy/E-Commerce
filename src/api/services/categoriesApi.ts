import { Category } from "../types/productType";

export async function getShopCategories(): Promise<Category[]> {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/categories",
    );
    if (!response.ok) throw new Error("ApiError");

    const payload = await response.json();
    return payload.data;
  } catch (error) {
    throw new Error("ApiError");
  }
}
