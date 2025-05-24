"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { scaleAnimation } from "@/utils/animations";
import { useCursorAnimation } from "@/hooks/use-cursor-animation";
import { usePointerEvents } from "@/hooks/use-pointer-events";
import { BREAKPOINTS } from "@/utils/animation-config";

interface CursorFollowProps {
  modal: {
    active: boolean;
    index: number;
  };
  children: React.ReactNode;
  className?: string;
  classNameContainer?: string;
  isProject?: boolean;
}

export default function CursorFollow({
  modal,
  children,
  className = "",
  classNameContainer = "",
  isProject = false,
}: CursorFollowProps) {
  const { active, index } = modal;
  const t = useTranslations("Home.Projects");

  // Refs for animation targets
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  // Setup animations
  const { updatePositions } = useCursorAnimation({
    modalContainer,
    cursor: isProject ? cursor : undefined,
    cursorLabel: isProject ? cursorLabel : undefined,
  });

  // Setup pointer events
  usePointerEvents({ onMove: updatePositions });

  // Early return for mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < BREAKPOINTS.mobile) {
    return null;
  }

  return (
    <>
      {/* Modal Container */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={`${classNameContainer} absolute p-16 text-center break-words opacity-0 lg:opacity-100 lg:flex items-center justify-center overflow-hidden pointer-events-none`}
        aria-hidden="true" // Since this is decorative
      >
        <div
          style={{ top: `${index * -100}%` }}
          className={`${className} absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]`}
        >
          {children}
        </div>
      </motion.div>

      {/* Cursor Label */}
      {isProject && (
        <motion.div
          ref={cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="text-md text-foreground dark:text-white bg-background absolute z-20 rounded-full flex items-center justify-center pointer-events-none text-center w-20 h-20 max-w-xs max-h-fit p-14 shadow-lg"
          aria-hidden="true"
        >
          {t("cursorLabel")}
        </motion.div>
      )}
    </>
  );
}
