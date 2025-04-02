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
    <div className="w-full lg:w-1/2 flex flex-col items-start">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-start sm:p-4 lg:p-6 rounded-lg"
        >
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
            size="xl2"
            style={{ lineHeight: "1.5" }}
          />
          <Typography
            text={service.test}
            color="white"
            size="md"
            className="font-extralight"
            style={{ lineHeight: "1.5" }}
          />
        </div>
      ))}
    </div>
  );
};
