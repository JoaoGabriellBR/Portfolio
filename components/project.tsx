"use client";
import React from "react";
import Typography from "./ui/typography";
import { Link } from "@/i18n/navigation";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import useDeviceType from "@/hooks/use-device-type";

interface ProjectProps {
  index: number;
  title: string;
  image: string;
  href: string;
  type: string;
  setModal: (modalState: { active: boolean; index: number }) => void;
}

export default function Project({
  index,
  title,
  image,
  href,
  type,
  setModal,
}: ProjectProps) {
  const { isMobile } = useDeviceType();

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
      className="group flex flex-col lg:flex-row w-full justify-start lg:justify-between items-start lg:items-center gap-4 py-12 border-t border-neutral-800 cursor-pointer last:border-b hover:opacity-40 lg:lg:hover:ml-12 transition-all duration-500 bg-background"
    >
      {isMobile && (
        <Image
          src={image}
          width={600}
          className="object-contain"
          height={600}
          alt={title}
        />
      )}
      <div className="flex flex-row items-center gap-4 group">
        <div className="relative flex items-center transition-all duration-300 lg:group-hover:pl-4">
          <FaArrowRight className="hidden lg:block absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-x-10 text-foreground size-7 sm:size-7 md:size-8 lg:size-9 xl:size-10" />
          <Typography
            text={title}
            color="white"
            size="xl3"
            letterPadding={false}
          />
        </div>
      </div>
      <Typography
        text={type}
        color="white"
        size="sm"
        className="font-normal"
        letterPadding={false}
      />
    </Link>
  );
}
