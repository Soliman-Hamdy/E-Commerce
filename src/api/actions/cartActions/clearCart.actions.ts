"use server";

import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";
import { getTokenFun } from "@/src/utilites/getTokenData";

export async function clearCart() {
  // get token, prodId
  const token = await getTokenFun();
  if (!token) {
    throw new Error("no token");
  }
  try {
    const respone = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
      method: "DELETE",

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
