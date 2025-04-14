"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ReactLenis } from "lenis/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import { Services } from "@/components/services";
import Typography from "@/components/ui/typography";
import { JobTimeline } from "@/components/job-timeline";
import { TextReveal } from "@/components/ui/text-reveal";
import { FeaturedWork } from "@/components/featured-work";
import ScrollBaseAnimation from "@/components/text-marquee";
import { DrawCircleText } from "@/components/draw-circle-text";
import { BsArrowDownLeft, BsArrow90DegDown } from "react-icons/bs";
import { RiPokerClubsFill, RiPokerDiamondsFill } from "react-icons/ri";
import { ScrollPage } from "@/components/scroll-page";
import { SiAdidas, SiLamborghini } from "react-icons/si";
import { textSizes } from "@/utils/text-sizes";

export default function About() {
  const t = useTranslations("About");

  return (
    <>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <main className="flex flex-col">
          {renderBackgroundImage()}
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

const renderBackgroundImage = () => {
  return (
    <div className="relative">
      <Image
        src="/images/photo.jpg"
        width={1000}
        height={1000}
        alt=""
        className="absolute top-0 lg:top-[-10rem] right-0 text-[100vw] lg:text-[60vw] opacity-15 -scale-x-100 pointer-events-none"
        style={{
          WebkitMaskImage: `
            linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%),
            linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%),
            linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)
`,
          maskImage: `
            linear-gradient(to top, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%),
            linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%),
            linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)

`,
          WebkitMaskComposite: "multiply",
          maskComposite: "intersect",
        }}
      />
    </div>
  );
};

const renderAboutMeSection = () => {
  return (
    <section className="relative container mx-auto px-4 flex flex-col items-start justify-center min-h-[calc(100vh-80px)]">
      <Typography
        text="Sobre mim"
        color="white"
        size="xl5"
        className="max-w-3xl -mt-[7rem]"
        letterPadding={false}
      />

      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0">
        <ScrollPage sectionLink="#competence" />
      </div>
    </section>
  );
};

const renderCompetenceSection = (t: any) => {
  return (
    <section
      id="competence"
      className="container mx-auto min-h-screen px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
    >
      <TextReveal paragraph={t("competence")} />
    </section>
  );
};

const renderSkillsSection = () => {
  return (
    <section className="container mx-auto px-4 flex flex-col items-center text-center">
      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center">
        <RiPokerClubsFill className={`${textSizes.xl5} text-red-600`} />
        <Typography
          text="Habilidades"
          color="white"
          size="xl5"
          letterPadding={false}
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full mb-[4rem] lg:mb-[8rem] lg:mt-[8rem] min-h-[10rem]">
        <Typography
          text={"* Algumas tecnologias que utilizo em meus projetos. *"}
          color="white"
          size="xl3"
          className="w-full lg:w-[80%] text-center lg:text-start"
        />
        <BsArrowDownLeft
          className={`${textSizes.xl6} text-foreground dark:text-white`}
        />
      </div>

      <Skills />
    </section>
  );
};

const renderExperienceSection = (t: any) => {
  return (
    <section className="container mx-auto px-4">
      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center">
        <RiPokerDiamondsFill className={`${textSizes.xl5} text-red-600`} />
        <DrawCircleText
          firstWord={"Minha"}
          secondWord={"Trajetória"}
          textSize="lg"
        />
      </div>

      <JobTimeline />
    </section>
  );
};

const renderFeaturedWorks = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center relative text-center lg:text-left ">
        <Typography
          text="Projetos em Destaque"
          color="white"
          size="xl5"
          letterPadding={false}
        />
        <BsArrow90DegDown
          className={`${textSizes.xl6} text-foreground dark:text-white hidden lg:block absolute bottom-20 right-80 scale-x-[-1]`}
        />
      </div>

      <div className="flex flex-col gap-24">
        <FeaturedWork
          projectName="Adidas"
          alt="adidas"
          projectDescription="Plataforma completa que oferece todos os recursos de um e-commerce."
          projectImage="adidas-about.png"
          Icon={SiAdidas}
        />

        <FeaturedWork
          projectName="Lamborghini"
          alt="lamborghini"
          projectDescription="Galeria de automóveis da marca de carros de luxo italiana."
          projectImage="lamborghini-about.png"
          imagePosition="left"
          Icon={SiLamborghini}
        />
      </div>
    </section>
  );
};

const renderServicesSection = () => {
  return (
    <>
      <ScrollBaseAnimation delay={10} baseVelocity={-1.5}>
        <Typography
          text={"* Serviços"}
          color="white"
          size="xl5"
          className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-[80vh] flex items-center justify-center"
        />
      </ScrollBaseAnimation>

      <section className="container mx-auto px-4 h-fit lg:-mt-[8rem]">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-[4rem] lg:mb-[8rem] lg:mt-[8rem]">
          <Typography
            text={"Eu poderia te ajudar com..."}
            color="white"
            size="xl3"
            className="w-full lg:w-[60%] text-center lg:text-start"
            letterPadding={false}
          />
          <BsArrowDownLeft
            className={`${textSizes.xl6} text-foreground dark:text-white my-4`}
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between items-center gap-16">
          <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px]">
            <Image
              src="/images/suits.png"
              alt="Suits icon"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain -scale-x-100 pointer-events-none"
            />
          </div>
          <Services />
        </div>
      </section>
    </>
  );
};
