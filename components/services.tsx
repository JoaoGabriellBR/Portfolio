import Typography from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export const Services = () => {
  const t = useTranslations("About.Services");

  const services = [
    {
      number: "01",
      name: "Front-end",
      test: t("frontend"),
    },
    {
      number: "02",
      name: "Back-end",
      test: t("backend"),
    },
    {
      number: "03",
      name: "Full Stack",
      test: t("fullstack"),
    },
  ];

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 lg:gap-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-start rounded-lg gap-4 lg:gap-8"
        >
          <Typography
            text={service.number}
            color="silver"
            className="text-sm"
            letterPadding={false}
          />
          <div className="bg-neutral-700 w-full h-[0.1rem]"></div>
          <Typography
            text={service.name}
            color="white"
            size="xl2"
            letterPadding={false}
          />
          <Typography
            text={service.test}
            color="white"
            size="md"
            className="font-extralight"
            letterPadding={false}
          />
        </div>
      ))}
    </div>
  );
};
