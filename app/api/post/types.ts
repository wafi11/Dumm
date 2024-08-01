import { CATEGORY } from "@prisma/client";

export interface PostsData {
  id: number;
  title: string;
  content: {
    url: string;
    title: string;
    desc: string;
  }[];
  category: CATEGORY;
  urlWebsite: string | null;
  urlGithub: string;
  technology: string[];
  createdAt: Date;
}
[];

export interface SidebarProps {
  id: number;
  content: {
    url: string;
    title: string;
    desc: string;
  }[];
}
[];

export interface Props {
  post: PostsData[];
  Archieve: SidebarProps[];
  Design: SidebarProps[];
  More: SidebarProps[];
}
