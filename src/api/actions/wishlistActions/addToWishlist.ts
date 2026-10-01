"use server";
import { getTokenFun } from "@/src/utilites/getTokenData";
import { ProductType } from "../../types/productType";

export async function addToWishlist(productId: string): Promise<ProductType> {
  const token = await getTokenFun();
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token ?? "",
        },
        body: JSON.stringify({ productId }),
      },
    );
    if (!resp.ok) throw new Error("Api Error");
    const payload = await resp.json();
    console.log("payload", payload);

    return payload.data;
  } catch (error) {
    throw new Error("Api Error");
  }
}
