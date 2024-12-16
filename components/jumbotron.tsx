"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SpinningText } from "./ui/spinning-text";
import { FaArrowDownLong } from "react-icons/fa6";

export const Jumbotron = ({ title }: any) => {
  const [titleNumber, setTitleNumber] = useState(0);

  const mainTitles = useMemo(
    () => ["Front - end", "Back - end", "Full Stack"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === mainTitles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, mainTitles]);

  return (
    <section className="container mx-auto min-h-screen max-w-4xl px-4 pb-60 flex flex-col items-center justify-between text-center">
      
      <h1 className="min-h-full flex flex-col justify-center items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter break-words text-center">
        {title}
      </h1>

      <SpinningText
        radius={5}
        fontSize={1}
        centerContent={<FaArrowDownLong />} // Ícone no centro
      >
        continue navegando
      </SpinningText>
    </section>
  );
};
