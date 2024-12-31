"use client";
import React from "react";
import { motion } from "framer-motion";

interface TypographyProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "white" | "silver";
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  text,
  size = "md",
  color = "white",
  className = "",
}) => {
  const sizeClasses = {
    sm: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl",
    md: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl",
    lg: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl",
    xl: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl",
  };

  const colorsClasses = {
    white:
      "bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200",
    silver: "text-neutral-950 dark:text-neutral-500",
  };

  return (
    <motion.p
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={` tracking-wide break-words ${sizeClasses[size]} ${colorsClasses[color]} ${className}`}
    >
      {text}
    </motion.p>
  );
};

export default Typography;
