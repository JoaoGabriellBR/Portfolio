"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textSizes } from "@/utils/text-sizes";
import { usePathname } from "@/i18n/navigation";
import {
  RiPokerClubsFill,
  RiPokerDiamondsFill,
  RiPokerSpadesFill,
  RiPokerHeartsFill,
} from "react-icons/ri";
import { opacity, preloader } from "@/utils/animations";

const greetingStyles = `${textSizes.xl5} text-white`;
const introductionStyles =
  "h-[100vh] w-[100vw] flex items-center justify-center fixed z-50 bg-[#050505]";
const svgStyles = "absolute top-0 w-full h-calc(100vh + 300px)";
const pathStyles = "fill-[#050505]";
const paragraph = `${textSizes.xl3} flex flex-row gap-4 text-white items-center absolute z-10 tracking-wide break-words`;

const greetings = [
  { PokerIcon: RiPokerClubsFill },
  { PokerIcon: RiPokerDiamondsFill },
  { PokerIcon: RiPokerSpadesFill },
  { PokerIcon: RiPokerHeartsFill },
  { PokerIcon: RiPokerDiamondsFill },
  { PokerIcon: RiPokerSpadesFill },
];

type PreloaderProps = {
  text: string;
};

export default function Preloader({ text }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [showGreetings, setShowGreetings] = useState<boolean | null>(null); // null enquanto não decide
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
      index == 0 ? 600 : 100
    );
  }, [index]);

  useEffect(() => {
    const isHome = pathname === "/";
    const isReload =
      sessionStorage.getItem("AcessouPeloRecarregamento") === "true";
    const isFlipLink = sessionStorage.getItem("AcessouPeloFlipLink") === "true";

    setShowGreetings(isHome && isReload && !isFlipLink);
  }, [pathname]);

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
      {dimension.width > 0 && showGreetings !== null && (
        <>
          {showGreetings ? (
            <GreetingIcon currentIndex={index} />
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

function GreetingIcon({ currentIndex }: { currentIndex: number }) {
  const { PokerIcon } = greetings[currentIndex];
  return (
    <div className="flex items-center justify-center">
      <PokerIcon className={greetingStyles} />
    </div>
  );
}

function AnimatedText({ text }: { text: string }) {
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
}
