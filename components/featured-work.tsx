import Image from "next/image";
import Typography from "@/components/ui/typography";
import { MagneticButton } from "@/components/ui/button-magnetic";
import { RiPokerSpadesFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "@/i18n/navigation";
import { ButtonHover } from "./ui/button-hover";
import { GoArrowUpRight } from "react-icons/go";
import { SiAdidas } from "react-icons/si";
import { textSizes } from "@/utils/text-sizes";

export const FeaturedWork = ({
  projectName,
  projectDescription,
  projectImage,
  imagePosition = "right",
  alt,
  Icon,
}: any) => {
  const isRight = imagePosition === "right";

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between ${
        isRight ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Text */}
      <div
        className={`lg:w-1/3 w-full flex flex-col gap-2 ${
          isRight ? "items-start text-left" : "items-start text-left"
        }`}
      >
        <Icon className="text-9xl"/>
        <Typography
          text={projectName}
          color="white"
          size="xl3"
        />
        <Typography
          text={projectDescription}
          color="white"
          size="md"
          className="font-extralight"
        />
        <ButtonHover
          href={`/projects/${alt}`}
          className="flex flex-row justify-between items-center"
        >
          <Typography text="Conferir" size="sm" letterPadding={false} />
          <GoArrowUpRight className={`${textSizes.md} -mb-[0.1rem]`} />
        </ButtonHover>
      </div>

      {/* Image */}
      <div className="relative lg:w-1/2 w-full flex justify-center lg:justify-end">
        <Image
          src={`/images/${projectImage}`}
          width={800}
          height={800}
          alt={alt}
          className="object-contain pointer-events-none max-w-full"
        />

        {/* Icon */}
        <RiPokerSpadesFill
          aria-label="Ícone Poker"
          className={`absolute top-2 ${
            isRight ? "right-2 lg:right-4" : "left-2 lg:left-4"
          } 
          lg:top-4 text-xl md:text-3xl lg:text-8xl text-white`}
        />
      </div>
    </div>
  );
};
