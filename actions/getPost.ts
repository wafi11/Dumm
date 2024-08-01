import db from "@/app/lib/db";

export async function GetPost() {
  try {
    const data = await db.post.findMany({
      select: {
        title: true,
        category: true,
        createdAt: true,
        urlGithub: true,
        urlWebsite: true,
        technology: true,
        id: true,
        content: {
          select: {
            title: true,
            desc: true,
            url: true,
          },
        },
      },
    });

    if (!data) {
      throw new Error("Internal Server Error");
    }

    return data;
  } catch {
    return null;
  }
}

export async function GetPostById(name: string) {
  try {
    const data = await db.post.findMany({
      where: {
        title: name,
      },
      include: {
        content: true,
      },
    });

    if (!data) {
      throw new Error("Internal Server Error");
    }

    return data;
  } catch {
    return null;
  }
}

export async function GetPostByDesign() {
  try {
    const data = await db.post.findMany({
      where: {
        category: "DESIGN",
      },
      select: {
        title: true,
        category: true,
        createdAt: true,
        urlGithub: true,
        urlWebsite: true,
        technology: true,
        id: true,
        content: {
          select: {
            title: true,
            desc: true,
            url: true,
          },
        },
      },
    });
    return data;
  } catch {
    return null;
  }
}
export async function GetPostByArchieve() {
  try {
    const data = await db.post.findMany({
      where: {
        category: "ARCHIVE",
      },
      select: {
        title: true,
        category: true,
        createdAt: true,
        urlGithub: true,
        urlWebsite: true,
        technology: true,
        id: true,
        content: {
          select: {
            title: true,
            desc: true,
            url: true,
          },
        },
      },
    });

    return data;
  } catch (error) {
    return null;
  }
}
export async function GetPostByMore() {
  try {
    const data = await db.post.findMany({
      where: {
        category: "MORE",
      },
      select: {
        title: true,
        category: true,
        createdAt: true,
        urlGithub: true,
        urlWebsite: true,
        technology: true,
        id: true,
        content: {
          select: {
            title: true,
            desc: true,
            url: true,
          },
        },
      },
    });

    if (!data) {
      throw new Error("Internal Server Error");
    }

    return data;
  } catch {
    return null;
  }
}
