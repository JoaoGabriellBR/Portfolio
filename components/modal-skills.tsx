"use client";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";
import { MagneticButton } from "./ui/button-magnetic";
import Typography from "./ui/typography";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { projects } from "@/utils/projects";
import { BorderSkills } from "./border-skills";
import { SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { FaReact, FaNode, FaDocker, FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import ModalSkillAnimation from "./modal-animation-skill";

export default function ModalSkills() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const t = useTranslations("Home");

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
      type: "Cloud",
    },
    {
      title: "Tailwind CSS",
      logo: <RiTailwindCssFill className={skillsStyles} />,
      type: "Front end",
    },
    {
      title: "TypeScript",
      logo: <SiTypescript className={skillsStyles} />,
      type: "Linguagem de programação",
    },
    {
      title: "MySQL",
      logo: <SiMysql className={skillsStyles} />,
      type: "Banco de dados",
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

      <ModalSkillAnimation modal={modal} skills={skills} />
    </section>
  );
}
