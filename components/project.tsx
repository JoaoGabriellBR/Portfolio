"use client";
import React from "react";
import HeroTitle from "./ui/hero-title";
import Link from "next/link";

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
      className="flex flex-col lg:flex-row w-full justify-start lg:justify-between items-start lg:items-center px-10 py-12 border-t border-neutral-800 cursor-pointer transition-opacity duration-200 last:border-b hover:opacity-70"
    >
      <HeroTitle text={title} color="white" size="md" />
      <HeroTitle text="Desenvolvimento Web" color="white" size="very_small" />
    </Link>
  );
}
