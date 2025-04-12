import React from "react";
import { Timeline } from "@/components/timeline";
import { useTranslations } from "next-intl";
import { useState } from "react";
import CursorFollow from "./cursor-follow";
import Image from "next/image";

export const JobTimeline = () => {
  const t = useTranslations("About.Experience");

  const jobs = [
    {
      company_name: t("Job1.name"),
      company_time: t("Job1.date"),
      position: t("Job1.position"),
      first_year_company: t("Job1.first_year_company"),
      last_year_company: t("Job1.last_year_company"),
      activities: t("Job1.activities"),
    },
    {
      company_name: t("Job2.name"),
      company_time: t("Job2.date"),
      position: t("Job2.position"),
      first_year_company: t("Job2.first_year_company"),
      last_year_company: t("Job2.last_year_company"),
      activities: t("Job2.activities"),
    },
    {
      company_name: t("Job3.name"),
      company_time: t("Job3.date"),
      position: t("Job3.position"),
      first_year_company: t("Job3.first_year_company"),
      last_year_company: t("Job3.last_year_company"),
      activities: t("Job3.activities"),
    },
  ];

  return <Timeline jobs={jobs} />;
};
