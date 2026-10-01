"use server";
import { getTokenFun } from "@/src/utilites/getTokenData";
import { ProductType } from "../../types/productType";

// add this to wishlistApi.ts
export async function getWishlist(): Promise<ProductType[]> {
  const token = await getTokenFun();
  if (!token) {
    throw new Error("no token");
  }
  try {
    const resp = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      },
    );
    if (!resp.ok) throw new Error("Api Error");
    const payload = await resp.json();
    console.log("wishlist payload", payload);

    return payload.data;
  } catch (error) {
    throw new Error("Api Error");
  }
}
