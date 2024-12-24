"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import HeroTitle from "./hero-title";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans"
      ref={containerRef}
    >
      <div className="flex flex-row gap-2">
        <HeroTitle text="Experiência" size="sm" />
        <HeroTitle text="profissional" size="sm" color="silver" />
      </div>

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="min-h-screen flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row pl-10 z-20 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <h3 className="hidden md:block text-xl md:text-5xl font-bold">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="h-full absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-zinc-100 via-zinc-800 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
