import { Brand, ProductType } from "../types/productType";

export async function getBrandsCategory(): Promise<Brand[]> {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/brands",
    );
    if (!response.ok) throw new Error("ApiError");
    const payload = await response.json();
    return payload.data;
  } catch (error) {
    throw new Error("ApiError");
  }
}
export async function getBrandDetails(_id: string): Promise<Brand> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/brands/${_id}`,
    );
    if (!response.ok) throw new Error("ApiError");
    const payload = await response.json();
    return payload.data;
  } catch (error) {
    throw new Error("ApiError");
  }
}
// Filter Brands Products
export async function getProductsByBrand(
  brandId: string,
): Promise<ProductType[]> {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`,
    );
    if (!response.ok) throw new Error(`ApiError: ${response.status}`);
    const payload = await response.json();
    return payload.data;
  } catch (error) {
    console.error("getProductsByBrand failed:", error);
    throw new Error("ApiError");
  }
}
