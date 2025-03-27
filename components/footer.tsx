"use client";

import { Link } from "@/i18n/navigation";
import { AnimatedText } from "./ui/animated-text";
import { ButtonArrow } from "./ui/button-arrow";
import Typography from "./ui/typography";
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { useState } from "react";
import { SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { FaReact, FaNode, FaDocker, FaAws, FaArrowRight } from "react-icons/fa";
import CursorFollow from "./footer-gallery";

export default function Footer() {
  const pathname = usePathname();

  const t = useTranslations("Footer");

  const [modal, setModal] = useState({ active: false, index: 0 });

  const skillsStyles =
    "text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-foreground";

  const skills = [
    {
      title: "React.js",
      logo: <FaReact className={skillsStyles} />,
      type: "Front end",
    },
  ];

  return (
    <footer className="h-screen rounded-lg overflow-hidden">
      
      <div className="h-full flex items-center justify-center">
        {skills.map((skill, index) => {
          return (
            <div
              onMouseEnter={() => {
                setModal({ active: true, index });
              }}
              onMouseLeave={() => {
                setModal({ active: false, index });
              }}
              className="mt-[-7rem] text-center px-0 lg:py-12 cursor-pointer transition-all duration-500"
            >
              <Typography text="Algum projeto em mente?" color="silver" size="md" />
              <Typography text="joaoname19@gmail.com" color="white" size="xl3" />
            </div>
          );
        })}

        <CursorFollow modal={modal} skills={skills} />

      </div>
        {/* Animated Text */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 w-full hidden lg:flex justify-center pointer-events-none z-0">
            <AnimatedText
              text="JOÃO GABRIEL SILVA"
              className="text-[10vw] text-zinc-200 dark:text-neutral-700"
            />
          </div>
        </div>

    </footer>

  );
}
