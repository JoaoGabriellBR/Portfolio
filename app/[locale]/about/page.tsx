"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { JobTimeline } from "@/components/job-timeline";
import Typography from "@/components/ui/typography";
import { ReactLenis } from "lenis/react";
import { Services } from "@/components/services";
import { useTranslations } from "next-intl";
import { TextReveal } from "@/components/ui/text-reveal";
import Skills from "@/components/skills";
import Image from "next/image";
import { RiPokerClubsFill, RiPokerDiamondsFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import ScrollBaseAnimation from "@/components/text-marquee";
import { BsArrowDownLeft, BsArrow90DegDown } from "react-icons/bs";
import { DrawCircleText } from "@/components/draw-circle-text";
import { FeaturedWork } from "@/components/featured-work";

export default function About() {
  const t = useTranslations("About");
  const { theme } = useTheme();
  const containerStyles = "container mx-auto min-h-screen px-4";

  return (
    <>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        {/* <main className="flex flex-col gap-y-[4rem] lg:gap-y-[8rem]"> */}
        <main className="flex flex-col">
          {renderBackgroundImage(theme)}
          {renderAboutMeSection()}
          {renderCompetenceSection(t)}
          {renderSkillsSection()}
          {renderExperienceSection(t)}
          {renderFeaturedWorks()}
          {renderServicesSection()}
        </main>
      </ReactLenis>
      <Footer page="Projetos" route="/projects" />
    </>
  );
}

function renderBackgroundImage(theme: any) {
  return (
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
  );
}

function renderAboutMeSection() {
  return (
    <section className="container mx-auto min-h-screen px-4 flex flex-col items-start text-start">
      <Typography
        text="Sobre mim"
        color="white"
        size="xl5"
        className="max-w-3xl"
        letterPadding={false}
      />
    </section>
  );
}

function renderCompetenceSection(t: any) {
  return (
    <section className="container mx-auto min-h-screen px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between -mb-[4rem] lg:-mb-[8rem]">
      <TextReveal paragraph={t("competence")} />
    </section>
  );
}

function renderSkillsSection() {
  return (
    <section className="container mx-auto px-4 flex flex-col items-center text-center">

      <div className="min-h-screen flex flex-col items-center justify-center">
        <RiPokerClubsFill className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[12rem] text-red-600" />
        <Typography
          text="Habilidades"
          color="white"
          size="xl5"
          letterPadding={false}
        />
      </div>

      <div className="text-center flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full min-h-[10rem] mb-[8rem]">
        <Typography
          text={"Conheça algumas tecnologias que utilizo em meus projetos."}
          color="white"
          size="xl3"
          className="w-full lg:w-[60%] text-center lg:text-start"
        />
        <BsArrowDownLeft className="text-foreground dark:text-white text-4xl lg:text-6xl" />
      </div>

      <Skills />
    </section>
  );
}

function renderExperienceSection(t: any) {
  return (
    <section className="container mx-auto px-4 space-y-[10rem]">

      <div className="min-h-screen flex flex-col items-center justify-center">
        <RiPokerClubsFill className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[12rem] text-red-600" />
        <DrawCircleText />
      </div>

      <Typography
        text={t("Experience.section")}
        color="white"
        size="xl2"
        className="text-center lg:hidden"
      />
      <JobTimeline />
    </section>
  );
}

function renderFeaturedWorks() {
  return (
    <section className="container mx-auto px-4">

      <div className="min-h-screen flex items-center justify-center relative text-center lg:text-left ">
        <Typography
          text="Projetos em Destaque"
          color="white"
          size="xl5"
          letterPadding={false}
        />
        <BsArrow90DegDown className="text-foreground dark:text-white  hidden lg:block absolute bottom-20 right-80 text-4xl lg:text-6xl scale-x-[-1]" />
      </div>

      <FeaturedWork
        projectName="Adidas, 2024"
        alt="adidas"
        projectDescription="Plataforma completa que oferece todos os recursos de um e-commerce."
        projectImage="adidas-about.png"
      />

      <FeaturedWork
        projectName="Lamborghini, 2025"
        alt="lamborghini"
        projectDescription="Galeria de automóveis da marca de carros de luxo italiana."
        projectImage="lamborghini-about.png"
        imagePosition="left"
      />

    </section>
  );
}

function renderServicesSection() {
  return (
    <>
      <ScrollBaseAnimation delay={10} baseVelocity={-1.5}>
        <Typography
          text={"* Serviços"}
          color="white"
          size="xl5"
          className="min-h-screen flex items-center justify-center"
        />
      </ScrollBaseAnimation>

      <section className="container mx-auto px-4 h-fit -mt-[8rem]">
        
        <div className="flex flex-row justify-between items-center mb-[8rem]">
          <Typography
            text={"Eu poderia te ajudar com..."}
            color="white"
            size="xl3"
            className="w-full lg:w-[60%] text-center lg:text-start"
            letterPadding={false}
          />
          <BsArrowDownLeft className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl my-4" />
        </div>

        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center">
          <Image
            src="/images/suits.png"
            width={450}
            height={450}
            alt="Suits icon"
            className="text-[20vw] lg:text-[50vw] -scale-x-100 pointer-events-none"
          />
          <Services />
        </div>

      </section>
    </>
  );
}
