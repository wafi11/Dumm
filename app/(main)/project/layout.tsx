import React, { ReactNode } from "react";
import {
  GetPost,
  GetPostByArchieve,
  GetPostByDesign,
  GetPostByMore,
} from "@/actions/getPost";
import Accordians from "./Accordians";
const data = [{ title: "Introductions", content: [{ url: "/project" }] }];
interface Props {
  children: ReactNode;
}

const Layout = async ({ children }: Props) => {
  const project = await GetPost();
  const archieve = await GetPostByArchieve();
  const More = await GetPostByMore();
  const Design = await GetPostByDesign();
  return (
    <main className="w-full h-full  py-[30px]  flex">
      <div className="sticky top-10 p-10  hidden h-fit flex-none space-y-3  shadow-sm md:block  xl:w-80 ">
        <Accordians data={data} title="Getting Started" active />
        <Accordians data={project} title="Project" />
        <Accordians data={archieve} title="Archieve" />
        <Accordians data={Design} title="Design" />
        <Accordians data={More} title="More" />
      </div>
      {children}
    </main>
  );
};

export default Layout;
