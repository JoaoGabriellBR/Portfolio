"use client";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";
import AdidasImage from "../public/images/adidas.png";

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
    color: "#8C8C8C",
  },
  {
    title: "World News",
    src: "/images/worldnews.png",
    href: "https://siteworldnews.vercel.app",
    color: "#EFE8D3",
  },
  {
    title: "Solar Toy",
    src: "/images/solartoy.png",
    href: "https://solartoy.netlify.app",
    color: "#706D63",
  },
];

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="flex items-center justify-center h-[100vh] container mx-auto px-4">
      <div className="flex flex-col items-center justify-center w-full">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
