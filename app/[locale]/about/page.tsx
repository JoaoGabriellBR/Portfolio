"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { JobTimeline } from "@/components/job-timeline";
import Typography from "@/components/ui/typography";
import { ReactLenis } from "lenis/react";
import { MagneticButton } from "@/components/ui/button-magnetic";
import { SiSnapdragon } from "react-icons/si";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Services } from "@/components/services";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { TextReveal } from "@/components/ui/text-reveal";
import Skills from "@/components/skills";
import { SiDungeonsanddragons } from "react-icons/si";
import Image from "next/image";
import { GiTie } from "react-icons/gi";
import { RiPokerClubsFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import { RiPokerSpadesFill } from "react-icons/ri";
import ScrollBaseAnimation from "@/components/text-marquee";
import { BsArrowDownLeft } from "react-icons/bs";

export default function About() {
  const t = useTranslations("About");
  const containerStyles = "container mx-auto min-h-screen px-4";
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <main className="flex flex-col gap-y-[10rem] lg:gap-y-[15rem]">
          <div className="relative">
            <Image
              src={
                theme === "dark"
                  ? "/images/second-suit.png"
                  : "/images/second-suit-light-mode.png"
              }
              width={1000}
              height={1000}
              alt=""
              className="absolute top-40 lg:top-[-10rem] right-0 text-[100vw] lg:text-[60vw] text-neutral-600 opacity-20 -scale-x-100 pointer-events-none"
            />
          </div>

          {/* About Me */}
          <section
            className={`${containerStyles} flex flex-col items-start justify-center lg:justify-start text-start`}
          >
            <Typography
              text="Sobre mim"
              color="white"
              size="xl5"
              className="max-w-3xl"
              letterPadding={false}
            />
          </section>

          {/* Competence */}
          <section
            className={`${containerStyles} flex flex-col lg:flex-row items-center justify-center lg:justify-between`}
          >
            <TextReveal paragraph={t("competence")} />
          </section>

          {/* Experience */}
          <section className={`${containerStyles}`}>
            <Typography
              text={t("Experience.section")}
              color="white"
              size="xl2"
              className="text-center lg:hidden mb-[-4rem]"
            />
            <JobTimeline />
          </section>

          {/* Skills */}

          <section
            className={`container mx-auto px-4 flex flex-col items-center text-center`}
          >
            <RiPokerClubsFill
              aria-label="Icone Poker"
              className="text-lg md:text-xl lg:text-[12rem] text-red-600"
            />

            <Typography
              // text={t("Skills.title")}
              text="Habilidades"
              color="white"
              size="xl5"
              className="mx-auto mt-4 mb-[5rem]"
              style={{ lineHeight: "1.5" }}
            />
          </section>

          <section
            className={`${containerStyles} flex flex-col items-center text-center`}
          >
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full min-h-[10rem] mb-[10rem]">
              <Typography
                text={
                  "Conheça algumas tecnologias que utilizo em meus projetos."
                }
                color="white"
                size="xl2"
                className="w-full lg:w-[60%] text-center lg:text-start"
              />
              <BsArrowDownLeft className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl" />
            </div>
            <Skills />
          </section>

          {/* Services */}
          <section
            className={`${containerStyles} flex flex-col justify-center items-center `}
          >
            <Typography
              text={t("Services.section")}
              color="white"
              size="xl2"
              className="text-center"
              style={{ lineHeight: "1.5" }}
            />
            <Services />
          </section>
        </main>
      </ReactLenis>
      <Footer page="Projetos" route="/projects" />
    </>
  );
}
