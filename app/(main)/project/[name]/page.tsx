import { GetPostById } from "@/actions/getPost";
import { Metadata } from "next";
import React from "react";
import Post from "./Post";

interface Props {
  params: {
    name: string;
  };
}

export const metadata: Metadata = {
  title: "Project",
};

export default async function Page({ params }: Props) {
  const data = await GetPostById(decodeURIComponent(params.name));
  return (
    <div className="relative gap-5 p-10  flex w-full">
      {data?.map((item) => (
        <Post post={item} key={item.id} />
      ))}
    </div>
  );
}
