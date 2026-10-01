"use server";
import { loginSchema } from "@/src/schema/loginSchema";
import { schema } from "@/src/schema/registerSchema";
import { cookies } from "next/headers";

import * as zod from "zod";

export async function userRegister(data: zod.infer<typeof schema>) {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const payload = await response.json();
    console.log(payload);
    return response.ok;
  } catch (error) {
    console.log(error);
  }
}
// export async function userLogin(data: zod.infer<typeof loginSchema>) {
//   try {

//     if (response.ok) {
//       const cokkie = await cookies();
//       cokkie.set("userToken", payload.token, {
//         httpOnly: true,
//         // maxAge:60
//         // expires:new Date()
//       });
//     }
//     return response.ok;
//   } catch (error) {
//     console.log(error);
//   }
// }
