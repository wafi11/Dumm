import { CATEGORY } from "@prisma/client";
import { z } from "zod";

const categoryValues = Object.values(CATEGORY);

export const PostSchema = z.object({
  password: z.string().refine((val) => val === "@1U141qq", {
    message: "Invalid password",
  }),
  urlGithub: z.string().url(),
  urlWebsite: z.string().url(),
  technology: z.array(z.string()),
  category: z.enum(["DESIGN", "PROJECT", "ARCHIVE", "MORE"]),
  title: z
    .string()
    .max(100, { message: "Title should not exceed 50 characters" }),
  titles: z
    .string()
    .max(100, { message: "Title should not exceed 50 characters" }),
  desc: z.string(),
  url: z.string().url(),
});

export type PostSchemas = z.infer<typeof PostSchema>;

export const Emails = z.object({
  nama: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .max(250, { message: "Message Max length is 250 characters" })
    .nonempty({ message: "Message is required" }),
});

export type EmailSchema = z.infer<typeof Emails>;
