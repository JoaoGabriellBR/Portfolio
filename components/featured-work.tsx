import Image from "next/image";
import Typography from "@/components/ui/typography";
import { MagneticButton } from "@/components/ui/button-magnetic";
import { RiPokerSpadesFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "@/i18n/navigation";
import { ButtonHover } from "./ui/button-hover";

export const FeaturedWork = ({
  projectName,
  projectDescription,
  projectImage,
  imagePosition = "right",
  alt,
}: any) => {
  const isRight = imagePosition === "right";

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${
        isRight ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Text */}
      <div
        className={`lg:w-1/3 w-full flex flex-col ${
          isRight ? "items-start text-left" : "items-end text-right"
        }`}
      >
        <Typography
          text={projectName}
          color="white"
          size="xl2"
          className="mt-4"
        />
        <Typography
          text={projectDescription}
          color="white"
          size="md"
          className="mt-4 font-extralight"
        />
        <ButtonHover href={`/projects/${alt}`}>Conferir projeto</ButtonHover>
      </div>

      {/* Image */}
      <div className="relative lg:w-1/2 w-full flex justify-center lg:justify-end">
        <Image
          src={`/images/${projectImage}`}
          width={800}
          height={800}
          alt={alt}
          className="object-contain pointer-events-none max-w-full rounded-[3rem]"
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
