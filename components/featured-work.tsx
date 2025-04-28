import Image from "next/image";
import Typography from "@/components/ui/typography";
import { RiPokerSpadesFill } from "react-icons/ri";
import { ButtonHover } from "./ui/button-hover";
import { GoArrowUpRight } from "react-icons/go";
import { textSizes } from "@/utils/text-sizes";
import { useTranslations } from "next-intl";
import { FC } from "react";

interface FeaturedWorkProps {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  imagePosition?: "right" | "left";
  alt: string;
  Icon: FC<{ className?: string }>;
}

export const FeaturedWork: FC<FeaturedWorkProps> = ({
  projectName,
  projectDescription,
  projectImage,
  imagePosition = "right",
  alt,
  Icon,
}) => {
  const t = useTranslations("About.FeaturedWorks");
  const isImageRight = imagePosition === "right";

  return (
    <section className={getContainerClasses(isImageRight)}>
      <div className={getTextContainerClasses(isImageRight)}>
        <RenderIcon Icon={Icon} />
        <RenderTexts
          projectName={projectName}
          projectDescription={projectDescription}
        />
        <RenderButton href={`/projects/${alt}`} label={t("button")} />
      </div>

      <div className="relative lg:w-1/2 w-full flex justify-center lg:justify-end">
        <RenderImage projectImage={projectImage} alt={alt} />
        <RenderOverlayIcon isRight={isImageRight} />
      </div>
    </section>
  );
};

// Helper Functions

function getContainerClasses(isRight: boolean) {
  return `flex flex-col lg:flex-row flex-wrap items-center justify-between gap-8 ${
    isRight ? "" : "lg:flex-row-reverse"
  }`;
}

function getTextContainerClasses(isRight: boolean) {
  return `lg:w-1/3 w-full flex flex-col gap-2 ${
    isRight ? "items-start text-left" : "items-start text-left"
  }`;
}

const RenderIcon: FC<{ Icon: FC<{ className?: string }> }> = ({ Icon }) => (
  <Icon className={`${textSizes.xl4} text-foreground dark:text-white`} />
);

const RenderTexts: FC<{ projectName: string; projectDescription: string }> = ({
  projectName,
  projectDescription,
}) => (
  <>
    <Typography text={projectName} color="white" size="xl3" />
    <Typography
      text={projectDescription}
      color="white"
      size="md"
      className="font-extralight"
    />
  </>
);

const RenderButton: FC<{ href: string; label: string }> = ({ href, label }) => (
  <ButtonHover
    href={href}
    className="flex flex-row justify-between items-center"
  >
    <Typography text={label} size="sm" letterPadding={false} />
    <GoArrowUpRight className={`${textSizes.md} -mb-[0.1rem]`} />
  </ButtonHover>
);

const RenderImage: FC<{ projectImage: string; alt: string }> = ({
  projectImage,
  alt,
}) => (
  <Image
    src={`/images/${projectImage}`}
    width={800}
    height={800}
    alt={alt}
    className="object-contain pointer-events-none max-w-full"
  />
);

const RenderOverlayIcon: FC<{ isRight: boolean }> = ({ isRight }) => (
  <RiPokerSpadesFill
    aria-label="Ícone Poker"
    className={`${textSizes.xl4} absolute top-2 ${
      isRight ? "right-2 lg:right-4" : "left-2 lg:left-4"
    } lg:top-4 text-white`}
  />
);
