"use client";
import { useState } from "react";
import Typography from "./ui/typography";
import { useTranslations } from "next-intl";
import { SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { FaReact, FaNode, FaDocker, FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { ModalAnimation } from "@/utils/modal-animation";

export default function ModalSkills() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const t = useTranslations("ModalSkills");

  const skillsStyles =
    "text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-foreground";

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
    <section className="flex flex-col items-center justify-center gap-20 min-h-screen container mx-auto px-4">
      <div className="flex flex-col items-center justify-center w-full">
        {skills.map((skill, index) => {
          return (
            <div
              onMouseEnter={() => {
                setModal({ active: true, index });
              }}
              onMouseLeave={() => {
                setModal({ active: false, index });
              }}
              className="flex flex-col lg:flex-row w-full justify-start lg:justify-between items-start lg:items-center px-0 lg:px-12 py-12 border-t border-neutral-800 cursor-pointer last:border-b hover:opacity-40 hover:ml-12 transition-all duration-500"
            >
              <Typography text={skill.title} size="xl" color="white" />
              <Typography text={skill.type} color="white" size="sm" />
            </div>
          );
        })}
      </div>

      <ModalAnimation modal={modal}>
        {skills.map((skill: any, index: any) => (
          <div
            key={`modal_${index}`}
            className="flex h-full w-full items-center justify-center bg-neutral-50 dark:bg-[#0c0c0c]"
          >
            {skill.logo}
          </div>
        ))}
      </ModalAnimation>
    </section>
  );
}
