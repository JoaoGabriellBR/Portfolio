"use client";
import { useState } from "react";
import Typography from "./ui/typography";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";
import CursorFollow from "./cursor-follow";
import Image from "next/image";

export default function MyCertifications() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const t = useTranslations("Certifications");

  const certifications = [
    {
      description: t("cybersecurity.description"),
      image: "introduction-to-cybersecurity.png",
      type: "2025",
    },
    {
      description: t("machine-learning.description"),
      image: "aws-machine-learning.png",
      type: "2024",
    },
    {
      description: t("cloud-foundations.description"),
      image: "aws-cloud-foundations.png",
      type: "2024",
    },
    {
      description: t("web-development.description"),
      image: "programador-web.png",
      type: "2023",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center place-self-end w-full">
      {certifications.map((c, index) => {
        return (
          <div
            onMouseEnter={() => {
              setModal({ active: true, index });
            }}
            onMouseLeave={() => {
              setModal({ active: false, index });
            }}
            className="group flex flex-col lg:flex-row w-full justify-start lg:justify-between items-start lg:items-center gap-4 py-12 border-t border-neutral-800 cursor-pointer last:border-b hover:opacity-40 hover:ml-12 transition-all duration-500"
          >
            <div className="flex flex-row items-center gap-4 group">
              <div className="relative flex items-center transition-all duration-300 group-hover:pl-2">
                <FaArrowRight className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-x-10 text-foreground size-5 sm:size-5 md:size-5 lg:size-6 xl:size-7" />
                <Typography
                  text={c.description}
                  color="white"
                  size="xl"
                  letterPadding={false}
                />
              </div>
            </div>

            <Typography
              text={c.type}
              size="sm"
              className="font-normal"
              letterPadding={false}
            />
          </div>
        );
      })}

      <CursorFollow
        modal={modal}
        classNameContainer="h-[8rem] sm:h-[8rem] md:h-[19rem] lg:h-[25rem] w-[8rem] sm:w-[8rem] md:w-[22rem] lg:w-[30rem]"
      >
        {certifications.map((c, idx) => (
          <div
            key={`modal_${idx}`}
            className="flex h-full w-full items-center justify-center bg-transparent"
          >
            <Image
              src={`/images/${c.image}`}
              width={600}
              className="object-contain"
              height={600}
              alt="image"
            />
          </div>
        ))}
      </CursorFollow>
    </section>
  );
}
