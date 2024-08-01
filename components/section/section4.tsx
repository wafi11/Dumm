"use client";
import React, { useEffect } from "react";
import styles from "./section4.module.scss";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { PostsData } from "@/app/api/post/types";

interface Props {
  post: PostsData[] | null;
}

const Section4 = ({ post }: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <section className={styles.section}>
      <div className={styles.text}>WORK</div>
      <div className={`${styles["text-container"]}`}>
        <div ref={container} className={styles.slidingImages}>
          <motion.div style={{ x: x1 }} className={styles.slider}>
            {post?.map((project, index) => {
              return (
                <div
                  key={index}
                  className={styles.project}
                  style={{ backgroundColor: "#e3e5e7 " }}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      fill={true}
                      alt={"image"}
                      src={project.content[0].url}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div style={{ x: x2 }} className={styles.slider}>
            {post?.slice(0, 4).map((project, index) => {
              return (
                <div
                  key={index}
                  className={styles.project}
                  style={{ backgroundColor: "#e3e5e7 " }}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      fill={true}
                      alt={"image"}
                      src={project.content[0].url}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
          <motion.div style={{ height }} className={styles.circleContainer}>
            <div className={styles.circle}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
