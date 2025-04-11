"use client";
import React, { useState } from "react";
import Typography from "./ui/typography";
import CursorFollow from "./cursor-follow";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { BsArrowRight } from "react-icons/bs";
import { textSizes } from "@/utils/text-sizes";

interface ListItemsProps {
  company_name: string;
  company_time: string;
  position: string;
  activities: string;
}

interface StepsProps {
  jobs: ListItemsProps[];
}

export const Timeline = ({ jobs }: { jobs: any }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const t = useTranslations("About.Experience");

  return (
    <section className="place-self-start w-full">
      {jobs.map((job: any, index: any) => {
        return (
          <div
            onMouseEnter={() => {
              setModal({ active: true, index });
            }}
            onMouseLeave={() => {
              setModal({ active: false, index });
            }}
            className="group w-full flex flex-col lg:flex-row items-start justify-between py-12 gap-4 border-t border-neutral-800 cursor-pointer last:border-b hover:opacity-40 hover:ml-12 transition-all duration-500"
          >
            <div className="flex-[1] flex items-center gap-4 group">
              <div className="flex flex-row items-center gap-4 group">
                <div className="relative flex items-center transition-all duration-300 group-hover:pl-2">
                  <FaArrowRight className="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-x-10 text-foreground size-5 sm:size-5 md:size-5 lg:size-6 xl:size-7" />
                  <Typography
                    text={job.company_name}
                    color="white"
                    size="xl2"
                    letterPadding={false}
                  />
                </div>
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
                text="2021"
                color="white"
                size="sm"
                className="font-normal"
                letterPadding={false}
              />
              <BsArrowRight className={textSizes.sm} />
              <Typography
                text="2022"
                color="white"
                size="sm"
                className="font-normal"
                letterPadding={false}
              />
            </div>
          </div>
        );
      })}

      <CursorFollow
        modal={modal}
        classNameContainer="h-[7rem] sm:h-[9rem] md:h-[12rem] lg:h-[17rem] w-[7rem] sm:w-[9rem] md:w-[12rem] lg:w-[17rem] 
      rounded-[2rem]"
        className="rounded-[2rem] absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
      >
        {jobs.map((job: any, index: any) => (
          <div
            key={`modal_${index}`}
            className="flex h-full w-full items-center justify-center shadow-lg rounded-[2rem]"
          >
            <span className="text-3xl">{job.position}</span>
          </div>
        ))}
      </CursorFollow>
    </section>
  );
};
