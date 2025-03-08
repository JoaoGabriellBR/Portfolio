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
  return (
    <Link href={href}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={`${
          type === "web"
            ? "text-[1rem] text-foreground"
            : "text-[4rem] text-background dark:text-foreground"
        } relative block overflow-hidden whitespace-nowrap font-extralight`}
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
              className="inline-block"
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
              className="inline-block"
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
