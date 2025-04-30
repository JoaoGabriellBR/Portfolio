"use client";

import { useRef, useEffect } from "react";
import { scaleAnimation } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import React from "react";

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

  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("Home.Projects");

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Modal Container */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={`${classNameContainer} absolute p-16 text-center break-words hidden lg:flex items-center justify-center overflow-hidden pointer-events-none`}
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
        >
          {t("cursorLabel")}
        </motion.div>
      )}
    </>
  );
}
