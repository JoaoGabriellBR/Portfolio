"use client";
import { useRef, useEffect, ReactElement } from "react";
import { scaleAnimation } from "@/utils/scale-animation";
import { motion } from "framer-motion";
import gsap from "gsap";

interface SkillProps {
  modal: { active: boolean; index: number };
  skills: { title: string; logo: ReactElement; type: string }[];
}

export default function SkillGallery({ modal, skills }: SkillProps) {
  const { active, index } = modal;

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
      {/* Modal Container */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="absolute h-[7rem] sm:h-[9rem] md:h-[12rem] lg:h-[17rem] w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[17rem] bg-white flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <div
          style={{ top: `${index * -100}%` }}
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
        >
          {skills.map((skill: any, index: any) => (
            <div
              key={`modal_${index}`}
              className="flex h-full w-full items-center justify-center shadow-lg bg-neutral-300 dark:bg-[#0c0c0c]"
            >
              {skill.logo}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
