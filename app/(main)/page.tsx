import React from "react";
import Section2 from "@/components/section/Section2";
import { Section3 } from "@/components/section/Section3";
import Section4 from "@/components/section/section4";
import Providers from "@/components/Provider/Index";
import Banner from "@/components/Banner/Banner";
import { GetPost } from "@/actions/getPost";

export default async function Home() {
  const project = await GetPost();
  return (
    <main className="">
      <Providers />
      <Banner />
      <Section2 />
      <Section3 post={project} />
      <Section4 post={project} />
    </main>
  );
}
