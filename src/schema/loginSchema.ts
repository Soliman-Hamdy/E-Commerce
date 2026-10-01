import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export let loginSchema = zod.object({
  email: zod.string().nonempty("Email required").email("invaild email"),
  password: zod
    .string()
    .nonempty("Pass required")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "invaild Password",
    ),
});
