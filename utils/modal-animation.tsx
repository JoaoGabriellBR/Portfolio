"use client";
import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const ModalAnimation = ({ children, modal, type }: any) => {
  const { active, index } = modal;
  const t = useTranslations("Home");

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

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
      {/* MODAL ANIMATION */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="absolute h-[7rem] sm:h-[9rem] md:h-[12rem] lg:h-[17rem] w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[17rem] bg-neutral-50 dark:bg-[#0c0c0c] flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <div
          style={{ top: `${index * -100}%` }}
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
        >
          {children}
        </div>
      </motion.div>

      {/* CURSOR LABEL */}
      {type === "projects" && (
        <motion.div
          ref={cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="absolute z-20 h-20 w-20 bg-background p-10  rounded-full flex items-center justify-center font-light text-sm pointer-events-none text-center"
        >
          {t("Projects.cursorLabel")}
        </motion.div>
      )}
    </>
  );
};
