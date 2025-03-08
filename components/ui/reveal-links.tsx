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
  const colorWeb =
    "bg-clip-text text-transparent tracking-normal break-words bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200";

  const colorMobile =
    "bg-clip-text text-transparent tracking-normal break-words bg-gradient-to-b from-neutral-100 to-neutral-200";

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
                  ? `${colorWeb} text-[1rem]`
                  : `${colorMobile}  text-[4rem]`
              } inline-block`}
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
                  ? `${colorWeb} text-[1rem]`
                  : `${colorMobile}  text-[4rem]`
              } inline-block`}
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
