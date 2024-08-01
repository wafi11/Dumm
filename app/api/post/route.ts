import prisma from "../../lib/db";
import { PostSchema } from "./schema";
import db from "../../lib/db";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const validatedBody = PostSchema.parse(body);
  const {
    urlGithub,
    urlWebsite,
    category,
    title,
    desc,
    url,
    technology,
    titles,
    password,
  } = validatedBody;

  if (
    validatedBody.password !== "@1U141qq" ||
    typeof validatedBody.password !== "string"
  ) {
    return Response.json("Invalid Credentials", { status: 404 });
  }
  try {
    const blog = await prisma.post.create({
      data: {
        title,
        urlWebsite,
        category,
        urlGithub,
        technology,
        content: {
          create: {
            title: titles,
            desc,
            url,
          },
        },
      },
      include: {
        content: true,
      },
    });
    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function PATCH(req: Request, res: Response) {
  const body = await req.json();
  const {
    urlGithub,
    urlWebsite,
    category,
    title,
    desc,
    url,
    technology,
    titles,
    id,
  } = body;

  try {
    const blog = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        urlWebsite,
        category,
        urlGithub,
        technology,
        content: {
          create: {
            title: titles,
            desc,
            url,
          },
        },
      },
      include: {
        content: true,
      },
    });
    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify(err), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const data = await db.post.findMany({
      include: {
        content: true,
      },
    });
    return Response.json(data);
  } catch (error) {
    return Response.json("Internal Server Erorr", { status: 500 });
  }
}
