"use client";
import { useState } from "react";
import Typography from "./ui/typography";
import { useTranslations } from "next-intl";
import { SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { FaReact, FaNode, FaDocker, FaAws, FaArrowRight } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import CursorFollow from "./cursor-follow";

export default function Skills() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const t = useTranslations("ModalSkills");

  const skillsStyles =
    "text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-white";

  const skills = [
    {
      title: "React.js",
      logo: <FaReact className={skillsStyles} />,
      type: "Front end",
    },
    {
      title: "Next.js",
      logo: <SiNextdotjs className={skillsStyles} />,
      type: "Front end",
    },
    {
      title: "Node.js",
      logo: <FaNode className={skillsStyles} />,
      type: "Back end",
    },
    {
      title: "Docker",
      logo: <FaDocker className={skillsStyles} />,
      type: "DevOps",
    },
    {
      title: "AWS",
      logo: <FaAws className={skillsStyles} />,
      type: t("aws"),
    },
    {
      title: "Tailwind CSS",
      logo: <RiTailwindCssFill className={skillsStyles} />,
      type: "Front end",
    },
    {
      title: "TypeScript",
      logo: <SiTypescript className={skillsStyles} />,
      type: t("typescript"),
    },
    {
      title: "MySQL",
      logo: <SiMysql className={skillsStyles} />,
      type: t("mysql"),
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center place-self-end w-[70%]">
      {/* <div className="flex flex-col items-center justify-center w-full"> */}
        {skills.map((skill, index) => {
          return (
            <div
              onMouseEnter={() => {
                setModal({ active: true, index });
              }}
              onMouseLeave={() => {
                setModal({ active: false, index });
              }}
              className="group flex flex-col lg:flex-row w-full justify-start lg:justify-between items-start lg:items-center py-12 border-t border-neutral-800 cursor-pointer last:border-b hover:opacity-40 hover:ml-12 transition-all duration-500"
            >
              <div className="flex flex-row items-center gap-4 group">
                <div className="relative flex items-center transition-all duration-300 group-hover:pl-2">
                  <FaArrowRight className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-x-10 text-foreground size-5 sm:size-5 md:size-5 lg:size-6 xl:size-7" />
                  <Typography
                    text={skill.title}
                    color="white"
                    size="xl"
                    letterPadding={false}
                  />
                </div>
              </div>

              <Typography
                text={skill.type}
                size="sm"
                className="font-normal"
                letterPadding={false}
              />
            </div>
          );
        })}
      {/* </div> */}

      <CursorFollow
        modal={modal}
        classNameContainer="h-[7rem] sm:h-[9rem] md:h-[12rem] lg:h-[17rem] w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[17rem] 
        rounded-[2rem]"
        className="rounded-[2rem] absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
      >
        {skills.map((skill: any, index: any) => (
          <div
            key={`modal_${index}`}
            className="flex h-full w-full items-center justify-center shadow-lg bg-foreground dark:bg-[#0c0c0c] rounded-[2rem]"
          >
            {skill.logo}
          </div>
        ))}
      </CursorFollow>
    </section>
  );
}
