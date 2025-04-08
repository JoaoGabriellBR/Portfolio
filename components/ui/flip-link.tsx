import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({
  children,
  href,
  type,
}: {
  children: string;
  href: string;
  type?: string;
}) => {
  const textColor =
    "tracking-wide break-words text-foreground dark:text-white";

  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={`relative block overflow-hidden`}
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className={`${
                type === "web"
                  ? `text-[1rem] font-normal`
                  : `text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7rem]`
              } inline-block leading-normal ${textColor}`}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>

        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className={`${
                type === "web"
                  ? `text-[1rem] font-normal`
                  : `text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7rem]`
              } inline-block leading-normal ${textColor}`}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};
