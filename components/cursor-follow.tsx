"use client";
import { useRef, useEffect } from "react";
import { scaleAnimation } from "@/utils/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import gsap from "gsap";

interface CursorFollowProps {
  modal: { active: boolean; index: number };
  children: any;
  className?: string;
  classNameContainer?: string;
  isProject?: boolean;
}

export default function CursorFollow({
  modal,
  children,
  className,
  classNameContainer,
  isProject = false,
}: CursorFollowProps) {
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const t = useTranslations("Home.Projects");

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
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
          className={`text-md text-foreground dark:text-white bg-background absolute z-20 rounded-full flex items-center justify-center pointer-events-none text-center w-20 h-20 max-w-xs max-h-fit p-14 shadow-lg`}
        >
          {t("cursorLabel")}
        </motion.div>
      )}
    </>
  );
}
