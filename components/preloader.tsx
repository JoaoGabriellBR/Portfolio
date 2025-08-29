"use client";
import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { textSizes } from "@/utils/text-sizes";
import { RiPokerDiamondsFill } from "react-icons/ri";
import { opacity, preloader } from "@/utils/animations";

type PreloaderProps = {
  text: string;
  showGreetings?: boolean;
  onFinish?: () => void;
};

const greetings = [
  "Olá, tudo bem?",
  "Hallo, wie geht's?",
  "Bonjour, ça va ?",
  "Hola, ¿todo bien?",
  "Hola, tot bé?",
  "Hello, how are you?",
];

const introductionStyles =
  "h-[100vh] w-[100vw] flex items-center justify-center fixed z-50 bg-[#050505]";
const svgStyles = "absolute top-0 w-full h-calc(100vh + 300px)";
const pathStyles = "fill-[#050505]";
const paragraph = `${textSizes.xl3} flex flex-row gap-4 text-white items-center absolute z-10 tracking-wide break-words`;

const AnimatedText = memo(function AnimatedText({ text }: { text: string }) {
  return (
    <motion.p
      className={paragraph}
      variants={opacity}
      initial="initial"
      animate="enter"
    >
      <RiPokerDiamondsFill className={`${textSizes.md} text-white`} />
      {text}
    </motion.p>
  );
});

function Preloader({ text, showGreetings, onFinish }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // Medição responsiva da viewport para a animação
  useEffect(() => {
    const updateDimension = () => {
      requestAnimationFrame(() => {
        setDimension({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    };

    updateDimension();

    if (showGreetings) {
      window.addEventListener("resize", updateDimension);
      return () => window.removeEventListener("resize", updateDimension);
    }
  }, [showGreetings]);

  // Avança a sequência de saudações
  useEffect(() => {
    if (!showGreetings || index === greetings.length - 1) return;
    const timer = setTimeout(
      () => {
        requestAnimationFrame(() => setIndex((i) => i + 1));
      },
      index === 0 ? 600 : 180
    );
    return () => clearTimeout(timer);
  }, [index, showGreetings]);

  // Encerra após a última saudação (com pequena pausa)
  useEffect(() => {
    if (!showGreetings) return;
    if (index === greetings.length - 1) {
      const t = setTimeout(() => onFinish?.(), 600);
      return () => clearTimeout(t);
    }
  }, [index, showGreetings, onFinish]);

  // Paths do SVG da curva
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
      initial={preloader.initial}
      exit={preloader.exit}
      className={`${introductionStyles} overflow-hidden`}
    >
      {dimension.width > 0 && (
        <>
          {showGreetings ? (
            <AnimatedText text={greetings[index]} />
          ) : (
            <AnimatedText text={text} />
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

export default memo(Preloader);
