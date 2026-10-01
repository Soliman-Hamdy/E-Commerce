import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req: req });
  if (!token)
    return NextResponse.json({ message: "unauthorized", status: 401 });
  const respone = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "GET",
    headers: {
      token: token.token,
      "Content-type": "application/json",
    },
  });
  if (!respone.ok)
    return NextResponse.json({ message: "unauthorized", status: 401 });
  const payload = await respone.json();
  console.log(payload);

  return NextResponse.json(payload);
}
