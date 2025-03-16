"use client";
import React from "react";
import Typography from "./ui/typography";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

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
      href={href}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      target="blank"
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between items-start lg:items-center px-10 py-12 border-t border-neutral-800 cursor-pointer last:border-b hover:opacity-40 hover:ml-12 transition-all duration-500"
    >
      <Typography text={title} size="xl3" color="white" />
      <Typography text={t("Projects.type")} color="white" size="sm" />
    </Link>
  );
}
