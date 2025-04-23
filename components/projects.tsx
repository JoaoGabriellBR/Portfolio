"use client";
import { useState } from "react";
import Project from "./project";
import { MagneticButton } from "./ui/button-magnetic";
import Typography from "./ui/typography";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { projects } from "@/utils/projects";
import CursorFollow from "./cursor-follow";
import Image from "next/image";
import { BsArrowDownLeft } from "react-icons/bs";
import { usePathname } from "@/i18n/navigation";
import { useMemo } from "react";
import { useEffect } from "react";

export default function Projects({
  currentProject,
}: {
  currentProject?: string;
}) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const t = useTranslations("Home");
  const pathname = usePathname();

  const [visibleProjects, setVisibleProjects] = useState<typeof projects>([]);

  const filteredProjects = projects.filter(
    (project) => project.name !== currentProject
  );

  const isExactProjectsPage = pathname === "/projects";
  const isProjectDetailPage =
    pathname.startsWith("/projects/") && !isExactProjectsPage;

  // Função para sortear aleatoriamente os projetos
  function getRandomProjects(array: typeof projects, count: number) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Executa a lógica de visibilidade de projetos no cliente
  useEffect(() => {
    if (isExactProjectsPage) {
      setVisibleProjects(filteredProjects);
    } else if (isProjectDetailPage) {
      setVisibleProjects(getRandomProjects(filteredProjects, 3));
    } else {
      setVisibleProjects(filteredProjects.slice(0, 4));
    }
  }, [pathname, currentProject]);

  return (
    <section className="flex flex-col items-center justify-center gap-20 min-h-screen container mx-auto px-4">
      <BsArrowDownLeft className="place-self-end bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl my-4" />
      <div className="flex flex-col items-center justify-center w-full">
        {visibleProjects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              href={project.href}
              type={project.type}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>

      <CursorFollow
        modal={modal}
        classNameContainer="h-[8rem] sm:h-[8rem] md:h-[19rem] lg:h-[19rem] w-[8rem] sm:w-[8rem] md:w-[22rem] lg:w-[32rem]"
        isProject
      >
        {visibleProjects.map((project, idx) => (
          <div
            key={`modal_${idx}`}
            className="flex h-full w-full items-center justify-center "
          >
            <Image
              src={project.src}
              width={600}
              className="object-contain"
              height={600}
              alt="image"
            />
          </div>
        ))}
      </CursorFollow>

      {/* {pathname === "/" && ( */}
      <Link href="/projects">
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
          <IoIosArrowRoundForward className="text-foreground dark:text-white text-4xl" />
        </MagneticButton>
      </Link>
      {/* )} */}
    </section>
  );
}
