import React from "react";
import { Timeline } from "@/components/timeline";
import { useTranslations } from "next-intl";

export const JobTimeline = () => {
  const t = useTranslations("About.Experience");

  const steps = [
    {
      type: t("section"),
      jobs: [
        {
          company_name: t("Job1.name"),
          company_time: t("Job1.date"),
          position: t("Job1.position"),
          activities: t("Job1.activities"),
        },
        {
          company_name: t("Job2.name"),
          company_time: t("Job2.date"),
          position: t("Job2.position"),
          activities: t("Job2.activities"),
        },
        {
          company_name: t("Job3.name"),
          company_time: t("Job3.date"),
          position: t("Job3.position"),
          activities: t("Job3.activities"),
        },
      ],
    },
  ];

  return <Timeline steps={steps} />;
};
