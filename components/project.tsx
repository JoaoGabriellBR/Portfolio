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
  setModal: (modalState: { active: boolean; index: number }) => void;
}

export default function Project({
  index,
  title,
  href,
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
      target="blank"
      className="group flex flex-col lg:flex-row w-full justify-start lg:justify-between items-start lg:items-center py-12 border-t border-neutral-800 cursor-pointer last:border-b hover:opacity-40 hover:ml-12 transition-all duration-500 bg-background"
    >
      <div className="flex flex-row justify-between items-center gap-4">
        <FaArrowRight className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg size-5 -translate-x-full text-foreground opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:text-foreground group-hover:opacity-100 md:size-10" />
        <Typography text={title} size="xl3" color="white" />
      </div>
      <Typography text={t("Projects.type")} color="white" size="sm" />
    </Link>
  );
}
