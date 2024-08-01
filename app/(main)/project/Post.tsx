"use client";
import { PostsData } from "@/app/api/post/types";
import { Button } from "@/components/ui/button";
import { formatRelativeDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface PostProps {
  post: PostsData[] | null;
  title: string;
}

export default function Posts({ post, title }: PostProps) {
  const router = useRouter();

  return (
    <>
      {post && (
        <>
          <h2 className="text-lg  text-gray-200">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {post?.map((posts) => {
              return (
                <div key={posts.id} className="flex flex-col gap-3">
                  <Image
                    src={posts.content[0].url}
                    alt="/"
                    width={500}
                    height={500}
                    className="object-cover w-full h-[200px] rounded-xl"
                  />
                  <p className="">{formatRelativeDate(posts.createdAt)}</p>
                  <div className="flex gap-3">
                    <Button
                      className="bg-gray-800"
                      onClick={() => router.push(posts.urlGithub)}
                    >
                      Code
                    </Button>
                    <Button
                      className="bg-gray-800"
                      onClick={() => router.push(posts.urlWebsite as string)}
                    >
                      Live Demo
                    </Button>{" "}
                  </div>
                  <Link
                    href={`/project/${posts.title}`}
                    className="text-xl font-bold hover:underline"
                  >
                    {posts.title}
                  </Link>
                  <PostContent desc={posts.content[0].desc} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

const PostContent = ({ desc }: { desc: string }) => {
  const maxLength = 150;
  const truncatedDesc =
    desc.length > maxLength ? desc.slice(0, maxLength) + "..." : desc;

  return <p className="text-sm">{truncatedDesc}</p>;
};
