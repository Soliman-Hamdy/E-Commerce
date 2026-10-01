"use server";

import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";
import Page from "./../../../../.next/types/routes.d";
import { getTokenFun } from "@/src/utilites/getTokenData";

export async function addToCart(prodId: string) {
  // get token, prodId
  const token = await getTokenFun();
  if (!token) {
    throw new Error("no token");
  }
  try {
    const respone = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
      method: "POST",
      body: JSON.stringify({
        productId: prodId,
      }),
      headers: {
        token: token,
        "Content-type": "application/json",
      },
    });
    if (!respone.ok) throw new Error("Unauthorized");
    const payload = await respone.json();
    console.log(payload);

    return payload;
  } catch (error) {
    throw new Error("Unauthorized");
  }
}
