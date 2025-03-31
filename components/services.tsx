import Typography from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export const Services = () => {
  const t = useTranslations("About.Services");

  const services = [
    {
      number: "01",
      name: "Front end",
      test: t("frontend"),
    },
    {
      number: "02",
      name: "Back end",
      test: t("backend"),
    },
    {
      number: "03",
      name: "Full Stack",
      test: t("fullstack"),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-start sm:p-4 lg:p-6 rounded-lg bg-white">
          <Typography
            text={service.number}
            color="silver"
            style={{ lineHeight: "1.5" }}
            className="text-sm"
          />
          <div className="bg-neutral-700 w-full h-[0.1rem] my-6 sm:my-6 lg:my-8"></div>
          <Typography
            text={service.name}
            color="white"
            size="xl"
            style={{ lineHeight: "1.5" }}
          />
          <Typography
            text={service.test}
            color="silver"
            size="md"
            style={{ lineHeight: "1.5" }}
          />
        </div>
      ))}
    </div>
  );
};
