"use client";
import { cn } from "@/lib/utils";
import { motion, Transition, Variants } from "framer-motion";
import React, { CSSProperties } from "react";

export type SpinningTextProps = {
  children: string;
  style?: CSSProperties;
  duration?: number;
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  transition?: Transition;
  centerElement?: React.ReactNode;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

const BASE_TRANSITION: Transition = {
  repeat: Infinity,
  ease: "linear",
};

const BASE_ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

export function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  fontSize = 1,
  radius = 5,
  transition,
  centerElement,
  variants,
}: SpinningTextProps) {
  const letters = children.split("");
  const totalLetters = letters.length;

  const finalTransition: Transition = {
    ...BASE_TRANSITION,
    ...transition,
    type: "tween",
    duration: (transition as any)?.duration ?? duration,
  };

  const containerVariants: Variants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants: Variants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
    <div className={cn("relative inline-block", className)} style={style}>
      {/* Elemento central (ícone, imagem, etc) */}
      {centerElement && (
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {centerElement}
        </div>
      )}

      {/* Texto girando */}
      <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={finalTransition}
      >
        {letters.map((letter, index) => (
          <motion.span
            aria-hidden="true"
            key={`${index}-${letter}`}
            variants={itemVariants}
            className="absolute left-1/2 top-1/2 inline-block text-foreground dark:text-white"
            style={
              {
                "--index": index,
                "--total": totalLetters,
                "--font-size": fontSize,
                "--radius": radius,
                fontSize: `calc(var(--font-size, 1) * 1rem)`,
                transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
                transformOrigin: "center",
              } as CSSProperties
            }
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <span className="sr-only">{children}</span>
    </div>
  );
}
