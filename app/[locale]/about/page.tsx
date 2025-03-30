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
        <main className="flex flex-col gap-y-2 lg:gap-y-[20rem]">
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
            className={`${containerStyles} flex flex-col items-start justify-center lg:justify-start text-start mt-[-7rem]`}
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
          <section className={`${containerStyles} flex flex-col items-center`}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <RiPokerClubsFill
                  aria-label="Icone Poker"
                  className="text-lg md:text-xl lg:text-2xl text-neutral-600"
                />
                <Typography
                  text={t("Skills.section")}
                  color="silver"
                  size="md"
                  letterPadding={false}
                />
              </div>
              <Typography
                text={t("Skills.title")}
                color="white"
                size="xl2"
                className="max-w-3xl mx-auto mt-4"
                style={{ lineHeight: "1.5" }}
              />
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
      <Footer />
    </>
  );
}
