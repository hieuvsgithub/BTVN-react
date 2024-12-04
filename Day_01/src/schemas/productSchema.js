import * as z from "zod";

export const schemaProduct = z.object({
  title: z.string().trim().min(6, { message: "Tối thiểu 6 kí tự" }),
  price: z.number().min(1, "Gia lon hon 1 "),
  detail: z.string().optional(),
});

export const schemaLogin = z.object({
  name: z.string().trim().min(6, { message: "Tối thiểu 6 kí tự" }),
  email: z.string().trim(),
  password: z.string().trim().min(6, { message: "Tối thiểu 6 kí tự" }),
});
export const schemaRegister = z.object({
  name: z.string().trim().min(6, { message: "Tối thiểu 6 kí tự" }),
  email: z.string().trim(),
  password: z.string().trim().min(6, { message: "Tối thiểu 6 kí tự" }),
});
