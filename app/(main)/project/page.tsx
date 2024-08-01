import { Metadata } from "next";
import React from "react";
import Layout from "./layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Posts from "./Post";
import {
  GetPost,
  GetPostByArchieve,
  GetPostByDesign,
  GetPostByMore,
} from "@/actions/getPost";
import MorePostsState from "./MorePostsState";
import ButtonsSelected from "@/components/ButtonsSelected/Index";

export const metadata: Metadata = {
  title: "Project",
};

export default async function Page() {
  const data = await GetPost();
  const archieve = await GetPostByArchieve();
  const More = await GetPostByMore();
  const Design = await GetPostByDesign();
  return (
    <div className=" relative p-10  gap-5 flex  w-full">
      <div className=" text-white h-full  w-full ">
        <div className="flex justify-between  items-center ">
          <div className=" space-y-4  pb-6">
            <h1 className="w-full text-3xl font-bold">
              Welcome To my Blog & Portofolio Im Wafuddin And Here I Document My
              latest Explore
            </h1>
            <ButtonsSelected />
          </div>
        </div>
        <MorePostsState
          Design={Design}
          More={More}
          archieve={archieve}
          data={data}
        />
      </div>
    </div>
  );
}
