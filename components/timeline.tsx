"use client";

import React, { useState } from "react";
import Typography from "./ui/typography";
import CursorFollow from "./cursor-follow";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { textSizes } from "@/utils/text-sizes";

interface Job {
  name: string;
  position: string;
  first_year_company: string;
  last_year_company: string;
}

interface TimelineProps {
  jobs: Job[];
}

export function Timeline({ jobs }: TimelineProps) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="place-self-start w-full">
      {jobs.map((job, index) => (
        <JobItem
          key={`job_${index}`}
          job={job}
          isActive={modal.active && modal.index === index}
          onHover={() => setModal({ active: true, index })}
          onLeave={() => setModal({ active: false, index })}
        />
      ))}

      <CursorFollow
        modal={modal}
        classNameContainer="h-[7rem] sm:h-[9rem] md:h-[12rem] lg:h-[17rem] w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[17rem] rounded-[2rem]"
        className="rounded-[2rem] absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
      >
        {jobs.map((job, index) => (
          <ModalContent key={`modal_${index}`} position={job.position} />
        ))}
      </CursorFollow>
    </section>
  );
}

const JobItem = ({
  job,
  isActive,
  onHover,
  onLeave,
}: {
  job: Job;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => (
  <div
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className={`group w-full flex flex-col lg:flex-row items-start justify-between py-12 gap-4 border-t border-neutral-800 cursor-pointer last:border-b transition-all duration-500 ${
      isActive ? "opacity-40" : "hover:opacity-40 lg:hover:ml-12"
    }`}
  >
    <div className="flex-[1] flex items-center gap-4 group">
      <div className="relative flex items-center transition-all duration-300 lg:group-hover:pl-2">
        <FaArrowRight className="hidden lg:block absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-x-10 text-foreground size-5 sm:size-5 md:size-5 lg:size-6 xl:size-7" />
        <Typography
          text={job.name}
          color="white"
          size="xl2"
          letterPadding={false}
        />
      </div>
    </div>

    <Typography
      text={job.position}
      color="white"
      size="sm"
      className="font-normal lg:hidden"
      letterPadding={false}
    />

    <div className="flex-[1] flex justify-end items-center gap-4">
      <Typography
        text={job.first_year_company}
        color="white"
        size="sm"
        className="font-normal"
        letterPadding={false}
      />
      <BsArrowRight className={textSizes.sm} />
      <Typography
        text={job.last_year_company}
        color="white"
        size="sm"
        className="font-normal"
        letterPadding={false}
      />
    </div>
  </div>
);

const ModalContent = ({ position }: { position: string }) => (
  <div className="flex h-full w-full items-center justify-center shadow-lg rounded-[2rem]">
    <span className="text-3xl">{position}</span>
  </div>
);
