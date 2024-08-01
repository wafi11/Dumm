import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./preloader.module.scss";

const words = [
  "Hello",
  "Gooten",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
  "Welcome!",
];
export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeoutId = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timeoutId);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      className={styles.introduction}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ enter: { transition: { staggerChildren: 0.1 } } }}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            key={`word_${index}`}
            variants={{
              initial: { opacity: 0 },
              enter: { opacity: 1 },
            }}
            className={styles.word}
          >
            {words[index]}
          </motion.p>
          <svg width={dimension.width} height={dimension.height}>
            <motion.path
              key={`path_${index}`}
              d={index === 0 ? initialPath : targetPath}
              variants={curve}
              fill="transparent"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
