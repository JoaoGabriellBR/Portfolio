"use client";

import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { textSizes } from "@/utils/text-sizes";
import { TfiArrowTopRight } from "react-icons/tfi";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { SmoothScrollHero } from "@/components/parallax-images";
import Typography from "@/components/ui/typography";
import { MagneticButton } from "@/components/ui/button-magnetic";
import Projects from "@/components/projects";
import ScrollBaseAnimation from "@/components/text-marquee";
import { Meteors } from "@/components/ui/meteors";
import PageWithLoader from "@/components/page-with-loader";
import useDeviceType from "@/hooks/use-device-type";

export default function HomePage() {
  const tHome = useTranslations("Home");
  const tHeader = useTranslations("Header");

  return (
    <PageWithLoader text={tHeader("home")}>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <main className="flex flex-col">
          <Meteors number={200} />
          <Jumbotron translations={tHome} />
          <AboutSection translations={tHome} />
          <SmoothScrollHero />
          <ProjectsIntro translations={tHome} />
          <Projects />
        </main>
      </ReactLenis>
      <Footer page={tHeader("about")} route="/about" />
    </PageWithLoader>
  );
}

function Jumbotron({
  translations,
}: {
  translations: ReturnType<typeof useTranslations>;
}) {
  return (
    <>
      <div className="absolute top-0 inset-0 flex justify-center items-center z-0 pointer-events-none">
        <BackgroundImage />
      </div>
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full z-10 pb-20">
          <ScrollBaseAnimation delay={1000} baseVelocity={-1.5}>
            <Typography
              text={translations("jumbotron")}
              color="white"
              size="xl5"
              className="text-center"
            />
          </ScrollBaseAnimation>
        </div>
      </div>
    </>
  );
}

function BackgroundImage() {
  return (
    <Image
      src="/images/photo.jpg"
      width={1100}
      height={1100}
      alt="Personal photo"
      className="opacity-80 dark:opacity-70 -scale-x-100 pointer-events-none"
      style={{
        WebkitMaskImage: `
            linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%),
            linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
            linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%),
            linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)
          `,
        maskImage: `
            linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%),
            linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
            linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%),
            linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)
          `,
        WebkitMaskComposite: "multiply",
        maskComposite: "intersect",
      }}
    />
  );
}

function AboutSection({
  translations,
}: {
  translations: ReturnType<typeof useTranslations>;
}) {
  const { isMobile, isTablet, isLandscape } = useDeviceType();
  return (
    <section
      className={`${
        isMobile ? "-mb-[12rem]" : isTablet && !isLandscape ? "-mb-[6rem]" : ""
      } relative container mx-auto px-4 min-h-[10rem] lg:min-h-[40rem] flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4`}
    >
      <Typography
        text={translations("Section2.title")}
        color="white"
        size="xl2"
        className="w-full lg:w-[60%] text-center lg:text-start"
      />

      <Link href="/about">
        <MagneticButton
          distance={1}
          type="3d"
          className="w-40 h-40 lg:w-64 lg:h-64 flex flex-col justify-center items-center gap-2 text-2xl p-5"
        >
          <TfiArrowTopRight
            className={`${textSizes.xl6} text-foreground dark:text-white`}
          />
          <Typography
            size="md"
            text={translations("Section2.button")}
            letterPadding={false}
          />
        </MagneticButton>
      </Link>
    </section>
  );
}

function ProjectsIntro({
  translations,
}: {
  translations: ReturnType<typeof useTranslations>;
}) {
  return (
    <ScrollBaseAnimation delay={1000} baseVelocity={-1.5}>
      <Typography
        text={translations("Section3.title")}
        color="white"
        size="xl5"
        className="lg:pb-20"
      />
    </ScrollBaseAnimation>
  );
}
