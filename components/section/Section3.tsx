"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./section3.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import { PostsData } from "@/app/api/post/types";

type DataType = {
  nama: string;
  image: string;
  color: string;
};

interface Props {
  post: PostsData[] | null;
}

export const Section3 = ({ post }: Props) => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className={`${styles.container}  container`}>
      <div className={styles.body}>
        {post?.slice(0, 4).map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={`pentol_${index}`}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={post} />
    </section>
  );
};

interface Prod {
  index: number;
  title: string;
  setModal: any;
}

const Project = ({ index, setModal, title }: Prod) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
};

interface ModalProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: PostsData[] | null;
}

const Modal = ({ modal, projects }: ModalProps) => {
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },

    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };
  const { active, index } = modal;

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects?.map((project, index) => {
            const { url } = project.content[0];
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: "#e3e5e7 " }}
                key={`modal_${index}`}
              >
                <Image src={url} width={300} height={300} alt="image" />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>

      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
};
