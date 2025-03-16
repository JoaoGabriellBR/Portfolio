"use client";
import { useState } from "react";
import Project from "./project";
import { MagneticButton } from "./ui/button-magnetic";
import Typography from "./ui/typography";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { projects } from "@/utils/projects";
import { ModalAnimation } from "@/utils/modal-animation";
import Image from "next/image";

export default function ModalProjects() {
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

      <ModalAnimation modal={modal} type="projects">
        {projects.map((project, index) => (
          <div
            key={`modal_${index}`}
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
      </ModalAnimation>

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
            size="md"
          />
          <IoIosArrowRoundForward className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl" />
        </MagneticButton>
      </Link>
    </section>
  );
}
