"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import HeroTitle from "./hero-title";
import { Tilt } from "./tilt";
import { BorderTrail } from "./border-trail";

interface ListItemsProps {
  company_name: string;
  company_time: string;
  position: string;
  activities: string;
}

interface StepsProps {
  type: string;
  jobs: ListItemsProps[];
}

export const Timeline = ({ steps }: { steps: StepsProps[] }) => {
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
    <div ref={containerRef}>
      <div ref={ref} className="relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="min-h-screen flex flex-col lg:flex-row justify-start pt-10"
          >
            {/* EXPERIÊNCIA  */}
            <div className="min-w-40 lg:sticky flex flex-col items-start px-4 z-20 top-20 my-10 lg:mb-0 self-start max-w-xs lg:max-w-sm md:w-full">
              <HeroTitle text={step.type} size="md" className="hidden lg:flex" />
            </div>

            {/* DADOS DO TRABALHO */}
            <div className="flex flex-col justify-start gap-20 pl-4 lg:pl-60">
              {step.jobs.map((job) => (
                <Tilt
                  rotationFactor={8}
                  isRevese
                  className={`p-20 border border-neutral-200 dark:border-neutral-700 bg-background rounded-[2rem]`}
                >
                  <BorderTrail
                    style={{
                      boxShadow:
                        "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                    }}
                    size={100}
                  />
                  <div
                    className="flex h-full flex-col items-start justify-start gap-4"
                    role="status"
                    aria-label="Loading..."
                  >
                    <HeroTitle
                      text={job.company_name}
                      size="paragraphy"
                      color="white"
                      letterPadding={false}
                    />
                    <HeroTitle
                      text={job.position}
                      size="very_small"
                      color="silver"
                      letterPadding={false}
                    />
                    <HeroTitle
                      text={job.activities}
                      size="very_small"
                      color="white"
                      letterPadding={false}
                    />
                     <HeroTitle
                      text={job.company_time}
                      color="silver"
                      className="self-end text-sm"
                      letterPadding={false}
                    />
                  </div>
                </Tilt>
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
