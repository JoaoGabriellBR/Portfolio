"use client";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";
import MagneticButton from "./ui/button-magnetic";
import HeroTitle from "./ui/hero-title";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const projects = [
  {
    title: "Adidas",
    src: "/images/adidas.png",
    href: "https://adidasshopping.vercel.app",
    color: "#000000",
  },
  {
    title: "UpWrite",
    src: "/images/upwrite.png",
    href: "https://up-write.vercel.app",
    color: "#000000",
  },
  {
    title: "World News",
    src: "/images/worldnews.png",
    href: "https://siteworldnews.vercel.app",
    color: "#000000",
  },
  {
    title: "Solar Toy",
    src: "/images/solartoy.png",
    href: "https://solartoy.netlify.app",
    color: "#000000",
  },
];

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

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
        <MagneticButton distance={1} className="w-64 h-20 text-2xl p-5">
          <MagneticButton
            className="flex flex-row justify-center items-center gap-2"
            distance={0.5}
            border={false}
          >
            <HeroTitle
              className="pb-0 pr-0"
              text="Mais projetos"
              letterPadding={false}
              size="very_small"
            />
            <IoIosArrowRoundForward className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl" />
          </MagneticButton>
        </MagneticButton>
      </Link>
    </section>
  );
}
