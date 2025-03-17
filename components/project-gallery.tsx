"use client";
import { useTranslations } from "next-intl";
import { useRef, useEffect } from "react";
import { scaleAnimation } from "@/utils/scale-animation";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

interface ProjectProps {
  modal: { active: boolean; index: number };
  projects: { src: string }[];
}

export default function ProjectGallery({ modal, projects }: ProjectProps) {
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
      {/* Modal Container */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="absolute h-[8rem] sm:h-[8rem] md:h-[19rem] lg:h-[22rem] w-[8rem] sm:w-[8rem] md:w-[22rem] lg:w-[25rem]bg-white flex items-center justify-center pointer-events-none overflow-hidden"
      >
        <div
          style={{ top: `${index * -100}%` }}
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
        >
          {projects.map((project, idx) => (
            <div
              key={`modal_${idx}`}
              className="flex h-full w-full items-center justify-center bg-[#0c0c0c]"
            >
              <Image
                src={project.src}
                width={300}
                className="object-contain lg:object-cover"
                height={300}
                alt="image"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cursor Label */}
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="absolute z-20 h-20 w-20 bg-background p-10  rounded-full flex items-center justify-center font-light text-sm pointer-events-none text-center"
      >
        {t("Projects.cursorLabel")}
      </motion.div>
    </>
  );
}
