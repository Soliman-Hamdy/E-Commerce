import { ProductType } from "../types/productType";

export async function getAllProducts(): Promise<ProductType[]> {
  try {
    const resp = await fetch("https://ecommerce.routemisr.com/api/v1/products");
    if (!resp.ok) throw new Error("Api Error");
    const payload = await resp.json();
    return payload.data;
  } catch (error) {
    throw new Error("Api Error");
  }
}
// dafasf
export async function getSingleProduct(prodId: string): Promise<ProductType> {
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${prodId}`,
    );
    if (!resp.ok) throw new Error("Api Error");
    const payload = await resp.json();
    return payload.data;
  } catch (error) {
    throw new Error("Api Error");
  }
}
// 2asdasd
