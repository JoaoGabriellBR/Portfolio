import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { textSizes } from "@/utils/text-sizes";

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
  const textColor = "tracking-wide break-words text-foreground dark:text-white";

  const handleClick = () => {
    sessionStorage.setItem("AcessouPeloFlipLink", "true");
    sessionStorage.setItem("AcessouPeloRecarregamento", "false");
  };

  return (
    <Link href={href} onClick={handleClick}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={`relative block overflow-hidden `}
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
                  ? `text-[1rem] dark:font-normal py-2`
                  : `${textSizes.xl7} py-5 sm:py-5 md:py-6 lg:py-7 xl:py-8`
              } inline-block ${textColor}`}
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
                  ? `text-[1rem] dark:font-normal py-2`
                  : `${textSizes.xl7} py-5 sm:py-5 md:py-6 lg:py-7 xl:py-8`
              } inline-block ${textColor}`}
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
