"use client";
import React from "react";
import { motion } from "framer-motion";
import { textSizes, textSizeProps } from "@/utils/text-sizes";

interface TypographyProps {
  text: string;
  size?: textSizeProps;
  color?: "white" | "silver";
  className?: string;
  letterPadding?: boolean;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  text,
  size = "",
  color = "",
  className = "",
  letterPadding = true,
  style,
}) => {

  const colorsClasses = {
    white: "text-foreground dark:text-white",
    silver:
      "bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-400 dark:to-neutral-700",
  } as const;

  return (
    <motion.h1
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      style={style}
      className={`${className} ${
        letterPadding ? "pb-3 pr-2" : ""
      } tracking-wide break-words ${textSizes[size]} ${colorsClasses[color]}`}
    >
      {text}
    </motion.h1>
  );
};

export default Typography;
