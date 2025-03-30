"use client";

import { cn } from "@/lib/utils";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface Props {
  paragraph: string;
  className?: string;
}

export const TextReveal: FC<Props> = ({ paragraph, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = paragraph.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] items-center bg-transparent py-[5rem]">
        <h1
          style={{ lineHeight: 1.3 }}
          ref={targetRef}
          className="flex flex-wrap bg-clip-text tracking-wide break-words text-neutral-950 dark:text-white text-7xl"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h1>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-10"}>{children}</span>
      <motion.h1
        style={{ opacity: opacity, lineHeight: 1.3 }}
        // className="max-w-4xl bg-clip-text text-transparent tracking-wide break-words bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        className="max-w-4xl bg-clip-text text-transparent tracking-wide break-words text-neutral-950 dark:text-white text-7xl"
      >
        {children}
      </motion.h1>
    </span>
  );
};
