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
import { RiPokerDiamondsFill } from "react-icons/ri";
import { ScrollPage } from "@/components/scroll-page";
import { SiAdidas, SiLamborghini } from "react-icons/si";
import { textSizes } from "@/utils/text-sizes";
import { ButtonHover } from "@/components/ui/button-hover";
import { GoArrowUpRight } from "react-icons/go";
import PageWithLoader from "@/components/page-with-loader";

export default function About() {
  const t = useTranslations("About");

  return (
    <PageWithLoader text={t("AboutMe.section")}>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <main className="flex flex-col">
          {renderBackgroundImage()}
          {renderAboutMeSection(t)}
          {renderCompetenceSection(t)}
          {renderExperienceSection(t)}
          {renderSkillsSection(t)}
          {renderCertificationsSection(t)}
          {renderFeaturedWorks(t)}
          {renderServicesSection(t)}
        </main>
      </ReactLenis>
      <Footer page={t("footer.projects")} route="/projects" />
    </PageWithLoader>
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
};

const renderAboutMeSection = (t: any) => {
  return (
    <section className="relative container mx-auto px-4 flex flex-col items-start justify-center min-h-[calc(100vh-80px)]">
      <Typography
        text={t("AboutMe.section")}
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
      <TextReveal paragraph={t("Competence.section")} />
    </section>
  );
};

const renderSkillsSection = (t: any) => {
  return (
    <section className="container mx-auto px-4 flex flex-col items-center text-center">
      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen mt-[8rem]">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full mb-[4rem] lg:mb-[8rem] lg:mt-[8rem] min-h-[10rem]">
          <Typography
            text={`* ${t("Skills.section")} *`}
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
};

const renderCertificationsSection = (t: any) => {
  return (
    <section className="relative w-full h-screen bg-certifications bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center bg-opacity-0 mt-[10rem]">
      <ButtonHover
        href={`/certifications`}
        className="text-white flex flex-row justify-between items-center font-semibold tracking-wide break-words after:bg-white"
      >
        <Typography
          text={t("Certifications.section")}
          size="xl4"
          letterPadding={false}
          className="text-white"
        />
        <GoArrowUpRight className={`${textSizes.xl4}`} />
      </ButtonHover>
    </section>
  );
};

const renderExperienceSection = (t: any) => {
  return (
    <section className="container mx-auto px-4">
      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center">
        <RiPokerDiamondsFill className={`${textSizes.xl5} text-red-600`} />
        <DrawCircleText
          firstWord={t("Experience.section").split(" ")[0]}
          secondWord={t("Experience.section").split(" ")[1]}
          textSize="lg"
        />
      </div>

      <JobTimeline />
    </section>
  );
};

const renderFeaturedWorks = (t: any) => {
  return (
    <section className="container mx-auto px-4">
      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center relative text-center lg:text-left ">
        <Typography
          text={t("FeaturedWorks.section")}
          color="white"
          size="xl5"
          letterPadding={false}
        />
        <BsArrow90DegDown
          className={`${textSizes.xl6} text-foreground dark:text-white hidden lg:block absolute bottom-20 right-80 scale-x-[-1]`}
        />
      </div>

      <div className="flex flex-col gap-32">
        <FeaturedWork
          projectName="Adidas"
          alt="adidas"
          projectDescription={t("FeaturedWorks.adidas.description")}
          projectImage="adidas/adidas-about.png"
          Icon={SiAdidas}
        />

        <FeaturedWork
          projectName="Lamborghini"
          alt="darkbulls"
          projectDescription={t("FeaturedWorks.lamborghini.description")}
          projectImage="darkbulls/lamborghini-about.png"
          imagePosition="left"
          Icon={SiLamborghini}
        />
      </div>
    </section>
  );
};

const renderServicesSection = (t: any) => {
  return (
    <>
      <ScrollBaseAnimation delay={10} baseVelocity={-1.5}>
        <Typography
          text={` ${t("Services.section")} *`}
          color="white"
          size="xl5"
          className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-[80vh] flex items-center justify-center"
        />
      </ScrollBaseAnimation>

      <section className="container mx-auto px-4 h-fit lg:-mt-[8rem]">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-[4rem] lg:mb-[8rem] lg:mt-[8rem]">
          <Typography
            text={t("Services.title")}
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
