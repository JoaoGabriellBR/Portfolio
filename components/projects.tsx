"use client";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";
import MagneticButton from "./ui/button-magnetic";
import Typography from "./ui/typography";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const projects = [
  {
    title: "Adidas",
    src: "/images/adidas.png",
    href: "https://adidasshopping.vercel.app",
  },
  {
    title: "UpWrite",
    src: "/images/upwrite.png",
    href: "https://up-write.vercel.app",
  },
  {
    title: "World News",
    src: "/images/worldnews.png",
    href: "https://siteworldnews.vercel.app",
  },
  {
    title: "Solar Toy",
    src: "/images/solartoy.png",
    href: "https://solartoy.netlify.app",
  },
];

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const t = useTranslations("Home");

  return (
    <section className="flex flex-col items-center justify-center gap-20 min-h-screen container mx-auto px-4">
      <div className="flex flex-col items-center justify-center w-full">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              href={project.href}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>

      <Modal modal={modal} projects={projects} />

      <Link href="https://github.com/JoaoGabriellBR" target="blank">
        <MagneticButton
          distance={1}
          type="3d"
          className="w-64 h-20 text-2xl p-5 flex flex-row justify-center items-center gap-2"
        >
          <Typography
            className="pb-0 pr-0"
            text={t("Projects.button")}
            letterPadding={false}
            size="very_small"
          />
          <IoIosArrowRoundForward className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl" />
        </MagneticButton>
      </Link>
    </section>
  );
}
