import HeroTitle from "@/components/ui/hero-title";
import { useTranslations } from "next-intl";
import { FaAndroid } from "react-icons/fa";

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-start p-6 rounded-lg"
        >
          <HeroTitle
            text={service.number}
            color="silver"
            style={{ lineHeight: "1.5" }}
            className="text-sm"
          />
          <div className="bg-neutral-700 w-96 h-[0.1rem] my-8"></div>
          {/* <FaAndroid className="text-8xl"/> */}
          <HeroTitle
            text={service.name}
            color="white"
            size="sm"
            style={{ lineHeight: "1.5" }}
          />
          <HeroTitle
            text={service.test}
            color="silver"
            size="very_small"
            style={{ lineHeight: "1.5" }}
          />
        </div>
      ))}
    </div>
  );
};
