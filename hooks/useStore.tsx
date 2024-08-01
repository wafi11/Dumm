import { PostsData } from "@/app/api/post/types";
import { create } from "zustand";

type PostState = {
  posts: Record<string, PostsData[] | null>;
  selectedPostType: string;
  setPosts: (type: string, posts: PostsData[] | null) => void;
  setSelectedPostType: (type: string) => void;
};

export const usePostStore = create<PostState>((set) => ({
  posts: {
    recent: [],
    design: [],
    archive: [],
    more: [],
  },
  selectedPostType: "recent",
  setPosts: (type, posts) =>
    set((state) => ({
      posts: {
        ...state.posts,
        [type]: posts,
      },
    })),
  setSelectedPostType: (type) => set({ selectedPostType: type }),
}));
