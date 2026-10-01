import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export let schema = zod
  .object({
    name: zod
      .string()
      .nonempty("Name is required")
      .min(3, "min 3 letters")
      .max(8, "max 8 letters"),
    username: zod
      .string()
      .nonempty("username is required")
      .min(3, "min 3 letters")
      .max(8, "max 8 letters"),
    email: zod.string().nonempty("Email required").email("invaild email"),
    password: zod
      .string()
      .nonempty("Pass required")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "invaild Password",
      ),
    rePassword: zod.string().nonempty("rePass required"),
    phone: zod
      .string()
      .nonempty("phone required")
      .regex(/^01[0125][0-9]{8}$/, "invaild Phone"),
  })
  .refine(
    (obj) => {
      if (obj.password === obj.rePassword) {
        return true;
      } else {
        return false;
      }
    },
    { path: ["rePassword"], message: "password & repassword not matched" },
  );
