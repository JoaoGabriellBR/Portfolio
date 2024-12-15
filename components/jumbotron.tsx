"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export const Jumbotron = ({ title, isHomePage }: any) => {
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
    <div className="container mx-auto h-screen w-full px-4 pb-60 flex flex-row items-center justify-center">
      <h1 className="flex flex-col justify-center items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] max-w-full tracking-tighter break-words text-center">
        <span className="text-spektr-cyan-50">{title}</span>
        <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
          &nbsp;
          {isHomePage &&
            mainTitles.map((mainTitle, index) => (
              <motion.span
                key={index}
                className="absolute font-semibold"
                initial={{ opacity: 0, y: "-100" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {
                        y: titleNumber > index ? -150 : 150,
                        opacity: 0,
                      }
                }
              >
                {mainTitle}
              </motion.span>
            ))}
        </span>
      </h1>
    </div>
  );
};
