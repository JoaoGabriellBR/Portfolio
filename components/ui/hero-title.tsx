"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroTitleProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl" | "paragraphy" | "very_small";
  color?: "white" | "silver";
  className?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  text,
  size = "",
  color = "white",
  className,
}) => {
  const sizeClasses: any = {
    very_small: "text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl",
    paragraphy: "text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
    sm: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl",
    md: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl",
    lg: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl",
    xl: "text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[10rem]",
  };

  const colorsClasses = {
    white:
      "bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200",
    silver:
      "bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-400 dark:to-neutral-700",
  };

  return (
    <motion.h1
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={`pb-3 pr-2 bg-clip-text text-transparent tracking-tighter break-words ${sizeClasses[size]} ${colorsClasses[color]} ${className}`}
    >
      {text}
    </motion.h1>
  );
};

export default HeroTitle;
