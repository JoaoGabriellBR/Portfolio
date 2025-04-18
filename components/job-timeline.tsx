import React from "react";
import { useTranslations } from "next-intl";
import { Timeline } from "@/components/timeline";

export const JobTimeline = () => {
  const t = useTranslations("About.Experience");

  const jobs = [
    {
      name: t("neway.name"),
      position: t("neway.position"),
      first_year_company: t("neway.first_year_company"),
      last_year_company: t("neway.last_year_company"),
    },
    {
      name: t("splitRisk.name"),
      position: t("splitRisk.position"),
      first_year_company: t("splitRisk.first_year_company"),
      last_year_company: t("splitRisk.last_year_company"),
    },
    {
      name: t("onlineShopping.name"),
      position: t("onlineShopping.position"),
      first_year_company: t("onlineShopping.first_year_company"),
      last_year_company: t("onlineShopping.last_year_company"),
    },
  ];

  return <Timeline jobs={jobs} />;
};
