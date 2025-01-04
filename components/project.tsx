"use client";
import React from "react";
import HeroTitle from "./ui/hero-title";

interface ProjectProps {
  index: number;
  title: string;
  setModal: (modalState: { active: boolean; index: number }) => void;
}

export default function Project({ index, title, setModal }: ProjectProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex w-full justify-between items-center px-10 py-12 border-t border-neutral-800 cursor-pointer transition-opacity duration-200 last:border-b hover:opacity-70"
    >
      <HeroTitle text={title} color="white" size="sm" />
      <HeroTitle text="Desenvolvimento Web" color="white" size="very_small" />
    </div>
  );
}
