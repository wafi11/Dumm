"use client";
import React from "react";
import Posts from "./Post";
import { PostsData } from "@/app/api/post/types";
import { usePostStore } from "@/hooks/useStore";

interface Props {
  data: PostsData[] | null;
  Design: PostsData[] | null;
  archieve: PostsData[] | null;
  More: PostsData[] | null;
}

const MorePostsState = ({ data, Design, More, archieve }: Props) => {
  const { selectedPostType, setSelectedPostType } = usePostStore();

  return (
    <div className="space-y-5 ">
      {selectedPostType === "recent" && (
        <Posts post={data} title="Recent Projects" />
      )}
      {selectedPostType === "design" && (
        <Posts post={Design} title="Recent Design" />
      )}
      {selectedPostType === "archive" && (
        <Posts post={archieve} title="Recent Archive" />
      )}
      {selectedPostType === "more" && (
        <Posts post={More} title="Recent More Posts" />
      )}
    </div>
  );
};

export default MorePostsState;
