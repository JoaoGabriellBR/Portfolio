"use client";
import React from "react";
import Typography from "./ui/typography";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";

interface ProjectProps {
  index: number;
  title: string;
  href: string;
  type: string;
  setModal: (modalState: { active: boolean; index: number }) => void;
}

export default function Project({
  index,
  title,
  href,
  type,
  setModal,
}: ProjectProps) {
  const t = useTranslations("Home");

  return (
    <Link
      key={index}
      href={href}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex flex-col lg:flex-row w-full justify-start lg:justify-between items-start lg:items-center gap-4 py-12 border-t border-neutral-800 cursor-pointer last:border-b hover:opacity-40 hover:ml-12 transition-all duration-500 bg-background"
    >
      <div className="flex flex-row items-center gap-4 group">
        <div className="relative flex items-center transition-all duration-300 group-hover:pl-4">
          <FaArrowRight className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-x-10 text-foreground size-7 sm:size-7 md:size-8 lg:size-9 xl:size-10" />
          <Typography
            text={title}
            color="white"
            size="xl3"
            letterPadding={false}
          />
        </div>
      </div>
      <Typography
        // text={t("Projects.type")}
        text={type}
        color="white"
        size="sm"
        className="font-normal"
        letterPadding={false}
      />
    </Link>
  );
}
