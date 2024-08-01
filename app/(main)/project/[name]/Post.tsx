import { PostsData } from "@/app/api/post/types";
import { Button } from "@/components/ui/button";
import { TextOpacity } from "@/components/ui/text-opacity";
import { formatRelativeDate } from "@/lib/utils";
import Image from "next/image";

interface Props {
  post: PostsData;
}

export default function Post({ post }: Props) {
  return (
    <div className="space-y-5 w-full  h-full">
      <div className="space-y-2 ">
        <h1 className="text-[5vw]  font-bold leading-none">{post.title}</h1>
        <p className="text-gray-600">
          {formatRelativeDate(post.createdAt as Date)}
        </p>
      </div>
      <Image
        src={post.content[0].url}
        alt="/"
        width={500}
        height={500}
        className="rounded-xl w-full  h-[400px]"
      />
      <div className="space-y-5">
        <TextOpacity
          desc={post.content[0].desc}
          title={post.content[0].title}
        />
      </div>
      <p>Techonology</p>
      <div className="flex w-full gap-3 overflow-x-auto ">
        {post.technology.map((item, index) => (
          <div key={index} className="mb-4">
            <Button className="bg-gray-800  text-blue-500 hover:text-white">
              {item}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
