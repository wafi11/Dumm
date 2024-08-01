"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  active?: boolean;
  title: string;
  data:
    | {
        title: string;
        id?: number;
        content: {
          url: string;
        }[];
      }[]
    | null;
}

export default function Accordians({ data, title, active }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const urls = decodeURIComponent(pathname);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full overflow-hidden px-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        {data?.map((item, index) => {
          const url = active
            ? `${item.content[0].url}`
            : `/project/${item.title}`;
          return (
            <AccordionContent
              key={index}
              onClick={() => router.push(url)}
              className={`text-gray-500 p-2 w-fit rounded-md cursor-pointer ${
                urls === decodeURIComponent(url)
                  ? "text-blue-500 bg-gray-700  "
                  : ""
              }`}
            >
              <p>{item.title}</p>
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
}
