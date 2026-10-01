"use server";

import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";
import Page from "./../../../../.next/types/routes.d";
import { getTokenFun } from "@/src/utilites/getTokenData";
import { shippingData } from "@/src/app/checkout/checkoutForm";

export async function payOnline(cartId: string, shippingAddress: shippingData) {
  // get token, prodId
  const token = await getTokenFun();
  if (!token) {
    throw new Error("no token");
  }
  try {
    const respone = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`,
      {
        method: "POST",
        body: JSON.stringify({
          shippingAddress: shippingAddress,
        }),
        headers: {
          token: token,
          "Content-type": "application/json",
        },
      },
    );
    if (!respone.ok) throw new Error("Unauthorized");
    const payload = await respone.json();
    console.log(payload);

    return payload;
  } catch (error) {
    throw new Error("Unauthorized");
  }
}
