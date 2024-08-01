"use client";
import { usePostStore } from "@/hooks/useStore";
import { Button } from "../ui/button";

export default function ButtonsSelected() {
  const { setSelectedPostType } = usePostStore();
  return (
    <div className="flex gap-2">
      <Button
        className="text-blue-500 bg-gray-700"
        onClick={() => setSelectedPostType("recent")}
      >
        Project
      </Button>
      <Button
        className="text-blue-500 bg-gray-700"
        onClick={() => setSelectedPostType("design")}
      >
        Design
      </Button>
      <Button
        className="text-blue-500 bg-gray-700"
        onClick={() => setSelectedPostType("archive")}
      >
        Archive
      </Button>
      <Button
        className="text-blue-500 bg-gray-700"
        onClick={() => setSelectedPostType("more")}
      >
        More
      </Button>
    </div>
  );
}
