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
import ScrollBaseAnimation from "@/components/text-marquee";
import { DrawCircleText } from "@/components/draw-circle-text";
import { ScrollPage } from "@/components/scroll-page";
import { ButtonHover } from "@/components/ui/button-hover";
import ScrollToTop from "@/components/scroll-to-top";

import { BsArrowDownLeft } from "react-icons/bs";
import { RiPokerDiamondsFill } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import { textSizes } from "@/utils/text-sizes";

export default function About() {
  const t = useTranslations("About");

  return (
    <>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <ScrollToTop />
        <main className="flex flex-col">
          <BackgroundImage />
          <AboutMeSection title={t("AboutMe.section")} />
          <CompetenceSection text={t("Competence.section")} />
          <ExperienceSection title={t("Experience.section")} />
          <SkillsSection title={t("Skills.section")} />
          <CertificationsSection title={t("Certifications.section")} />
          <ServicesSection
            sectionTitle={t("Services.section")}
            servicesTitle={t("Services.title")}
          />
        </main>
      </ReactLenis>
      <Footer page={t("footer.projects")} route="/projects" />
    </>
  );
}

function BackgroundImage() {
  return (
    <div className="relative">
      <Image
        src="/images/photo.webp"
        width={1000}
        height={1000}
        alt="Personal photo"
        className="absolute top-0 lg:top-[-10rem] right-0 text-[100vw] lg:text-[60vw] opacity-20 dark:opacity-15 -scale-x-100 pointer-events-none"
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
}

function AboutMeSection({ title }: { title: string }) {
  return (
    <section className="relative container mx-auto px-4 flex flex-col items-start justify-center min-h-[calc(100vh-80px)]">
      <Typography
        text={title}
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
}

function CompetenceSection({ text }: { text: string }) {
  return (
    <section
      id="competence"
      className="container mx-auto min-h-screen px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between"
    >
      <TextReveal paragraph={text} />
    </section>
  );
}

function SkillsSection({ title }: { title: string }) {
  return (
    <section className="container mx-auto px-4 flex flex-col items-center text-center">
      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen mt-[8rem]">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full mb-[4rem] lg:mb-[8rem] lg:mt-[8rem] min-h-[10rem]">
          <Typography
            text={`* ${title} *`}
            color="white"
            size="xl4"
            className="w-full lg:w-[80%] text-center lg:text-start"
          />
          <BsArrowDownLeft
            className={`${textSizes.xl6} text-foreground dark:text-white`}
          />
        </div>
        <Skills />
      </div>
    </section>
  );
}

function ExperienceSection({ title }: { title: string }) {
  const [firstWord, secondWord] = title.split(" ");

  return (
    <section className="container mx-auto px-4">
      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center">
        <RiPokerDiamondsFill className={`${textSizes.xl5} text-red-600`} />
        <DrawCircleText
          firstWord={firstWord}
          secondWord={secondWord}
          textSize="lg"
        />
      </div>
      <JobTimeline />
    </section>
  );
}

function CertificationsSection({ title }: { title: string }) {
  return (
    <section className="relative w-full h-screen bg-certificationsMobile lg:bg-certifications bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center bg-opacity-0 mt-[10rem]">
      <ButtonHover
        href="/certifications"
        className="text-white flex flex-row justify-between items-center font-semibold tracking-wide break-words after:bg-white"
      >
        <Typography
          text={title}
          size="xl4"
          letterPadding={false}
          className="text-white"
        />
        <GoArrowUpRight className={`${textSizes.xl4}`} />
      </ButtonHover>
    </section>
  );
}

function ServicesSection({
  sectionTitle,
  servicesTitle,
}: {
  sectionTitle: string;
  servicesTitle: string;
}) {
  return (
    <>
      <ScrollBaseAnimation delay={10} baseVelocity={-1.5}>
        <Typography
          text={` ${sectionTitle} *`}
          color="white"
          size="xl5"
          className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-[80vh] flex items-center justify-center"
        />
      </ScrollBaseAnimation>

      <section className="container mx-auto px-4 h-fit lg:-mt-[8rem]">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-[4rem] lg:mb-[8rem] lg:mt-[8rem]">
          <Typography
            text={servicesTitle}
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
}
