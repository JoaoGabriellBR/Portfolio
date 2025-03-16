"use client";
import React from "react";
import { motion } from "framer-motion";

interface TypographyProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl" | "xl2" | "xl3" | "xl4" | "xl5";
  color?: "white" | "silver";
  className?: string;
  letterPadding?: boolean;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  text,
  size = "md",
  color = "white",
  className = "",
  letterPadding = true,
  style,
}) => {
  const sizeClasses = {
    sm: "text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg",
    md: "text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl",
    lg: "text-md sm:text-md md:text-xl lg:text-2xl xl:text-3xl",
    xl: "text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl",
    xl2: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
    xl3: "text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
    xl4: "text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
    xl5: "text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem]",
  } as const;

  const colorsClasses = {
    white:
      "bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200",
    silver:
      "bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-400 dark:to-neutral-700",
  } as const;

  return (
    <motion.h1
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      style={style}
      className={`${
        letterPadding ? "pb-3 pr-2" : ""
      } bg-clip-text text-transparent tracking-normal break-words ${
        sizeClasses[size]
      } ${colorsClasses[color]} ${className}`}
    >
      {text}
    </motion.h1>
  );
};

export default Typography;
