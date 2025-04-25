"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textSizes } from "@/utils/text-sizes";
import { usePathname } from "@/i18n/navigation";

const greetings = [
  "Bom dia",
  "Bonjour",
  "Buenos días",
  "Good morning",
  "Guten Morgen",
];

export const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 100, transition: { duration: 1, delay: 0.2 } },
};

export const slideUp = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const introductionStyles =
  "h-[100vh] w-[100vw] flex items-center justify-center fixed z-50 bg-neutral-950";
const svgStyles = "absolute top-0 w-full h-calc(100vh + 300px)";
const pathStyles = "fill-neutral-950";
const paragraph = `${textSizes.xl4} flex text-white items-center absolute z-10 tracking-wide break-words`;
const spanStyles = "block w-[10px] h-[10px] bg-white rounded-full mr-[10px]";

type PreloaderProps = {
  text: string;
};

export default function Preloader({ text }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const pathname = usePathname();

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == greetings.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
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
      initial={{
        top: 0,
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
      }}
      exit={{
        top: "-100vh",
        borderBottomLeftRadius: "400px",
        borderBottomRightRadius: "400px",
        transition: {
          top: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
          borderBottomLeftRadius: { duration: 0.5, ease: "easeInOut" },
          borderBottomRightRadius: { duration: 0.5, ease: "easeInOut" },
        },
      }}
      className={`${introductionStyles} overflow-hidden`}
    >
      {dimension.width > 0 && (
        <>
          {pathname === "/" &&
          sessionStorage.getItem("AcessouPeloRecarregamento") === "true" &&
          sessionStorage.getItem("AcessouPeloFlipLink") === "false" ? (
            <motion.p
              className={paragraph}
              variants={opacity}
              initial="initial"
              animate="enter"
            >
              <span className={spanStyles}></span>
              {greetings[index]}
            </motion.p>
          ) : (
            <motion.p
              className={paragraph}
              variants={opacity}
              initial="initial"
              animate="enter"
            >
              <span className={spanStyles}></span>
              {text}
            </motion.p>
          )}

          <svg className={svgStyles}>
            <motion.path
              className={pathStyles}
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
