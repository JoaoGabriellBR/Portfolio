"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import HeroTitle from "./hero-title";
import Typography from "./typography";
import { SlArrowRight } from "react-icons/sl";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ListItemsProps {
  item: string;
}

interface JobsProps {
  company_name: string;
  subtitle: string;
  list_items?: ListItemsProps[];
  company_time: string;
}

export const Timeline = ({ jobs }: { jobs: JobsProps[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const links = [
    {
      title: "React.js",
      icon: <FaReact />,
      href: "#",
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs />,
      href: "#",
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs />,
      href: "#",
    },
  ];

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
      <div className="flex flex-row">
        <HeroTitle text="Experiência" size="sm" />
        <HeroTitle text="profissional" size="sm" color="silver" />
      </div>

      <div ref={ref} className="relative pb-20">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="min-h-screen flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="min-w-40 sticky flex flex-col items-start px-4 z-20 top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <HeroTitle text={job.company_name} size="sm" />
              <Typography text={job.company_time} size="sm" color="silver" />
            </div>

            <div className="self-start space-y-5">
              <HeroTitle
                text={job.subtitle}
                size="paragraphy"
                className="pt-3"
                color="silver"
              />
              {job.list_items?.map((li: ListItemsProps, index: number) => (
                <div
                  key={index}
                  className="flex flex-row justify-start items-center"
                >
                  <IoIosArrowRoundForward className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl" />
                  <HeroTitle letterPadding={false} text={li.item} color="white" size="paragraphy" />
                </div>
              ))}
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
