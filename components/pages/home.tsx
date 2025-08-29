"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { ReactLenis, useLenis } from "lenis/react";
import { Link } from "@/i18n/navigation";
import { textSizes } from "@/utils/text-sizes";
import { TfiArrowTopRight } from "react-icons/tfi";
import DOMPurify from "isomorphic-dompurify";

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
import ErrorBoundary from "@/components/error-boundary";

interface TranslationProps {
  translations: ReturnType<typeof useTranslations>;
}

// Função de utilidade para sanitizar traduções
const sanitizeTranslation = (text: string): string => {
  return DOMPurify.sanitize(text);
};

export default function Home() {
  const tHome = useTranslations("Home");
  const tHeader = useTranslations("Header");
  const lenis = useLenis();
  const { isMobile, isTablet, isLandscape } = useDeviceType();

  useEffect(() => {
    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [lenis]);

  const getResponsiveClasses = () => {
    if (isMobile) return "-mb-[12rem]";
    if (isTablet && !isLandscape) return "-mb-[6rem]";
    return "";
  };

  return (
    <ErrorBoundary>
      <PageWithLoader text={sanitizeTranslation(tHeader("home"))}>
        <Header />
        <Meteors number={40} />
        <ReactLenis root options={{ lerp: 0.05 }}>
          <main className="flex flex-col">
            <Jumbotron translations={tHome} />
            <AboutSection
              translations={tHome}
              responsiveClasses={getResponsiveClasses()}
            />
            <SmoothScrollHero />
            <ProjectsIntro translations={tHome} />
            <Projects />
          </main>
        </ReactLenis>
        <Footer page={sanitizeTranslation(tHeader("about"))} route="/about" />
      </PageWithLoader>
    </ErrorBoundary>
  );
}

function Jumbotron({ translations }: TranslationProps) {
  return (
    <>
      <div className="absolute top-0 inset-0 flex justify-center items-center z-0 pointer-events-none">
        <BackgroundImage />
      </div>
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full z-10 pb-20">
          <ScrollBaseAnimation delay={1000} baseVelocity={-1.5}>
            <Typography
              text={sanitizeTranslation(translations("jumbotron"))}
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
      src="/images/photo.webp"
      width={1100}
      height={1100}
      alt="Personal photo"
      priority
      fetchPriority="high"
      sizes="100vw"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhwYHB4cHBwcHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      className="opacity-80 dark:opacity-70 -scale-x-100 pointer-events-none"
      style={{
        WebkitMaskImage: `linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%),
          linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
          linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%),
          linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)`,
        maskImage: `linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%),
          linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
          linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%),
          linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)`,
        WebkitMaskComposite: "multiply",
        maskComposite: "intersect",
      }}
    />
  );
}

interface AboutSectionProps extends TranslationProps {
  responsiveClasses: string;
}

function AboutSection({ translations, responsiveClasses }: AboutSectionProps) {
  return (
    <section
      className={`${responsiveClasses} relative container mx-auto px-4 min-h-[10rem] lg:min-h-[40rem] flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4`}
    >
      <Typography
        text={sanitizeTranslation(translations("Section2.title"))}
        color="white"
        size="xl2"
        className="w-full lg:w-[60%] text-center lg:text-start"
      />

      <Link href="/about" className="z-10">
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
            text={sanitizeTranslation(translations("Section2.button"))}
            letterPadding={false}
          />
        </MagneticButton>
      </Link>
    </section>
  );
}

function ProjectsIntro({ translations }: TranslationProps) {
  return (
    <ScrollBaseAnimation delay={1000} baseVelocity={-1.5}>
      <Typography
        text={sanitizeTranslation(translations("Section3.title"))}
        color="white"
        size="xl5"
        className="lg:pb-20"
      />
    </ScrollBaseAnimation>
  );
}
