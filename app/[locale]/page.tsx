"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { ReactLenis } from "lenis/react";
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
import { ScrollPage } from "@/components/scroll-page";
import { Meteors } from "@/components/ui/meteors";
import { useIsMounted } from "@/hooks/useIsMounted";
import Loading from "@/components/loading";

export default function Home() {
  const t = useTranslations("Home");
  const t2 = useTranslations("Header");
  const { theme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return <Loading />;

  return (
    <>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <main className="flex flex-col">
          <div className="flex flex-col-reverse lg:flex-col">
            {isMounted && renderJumbotron(theme)}
            {renderSection2(t)}
          </div>
          <SmoothScrollHero />
          {renderSection3(t)}
          <Projects />
        </main>
      </ReactLenis>
      <Footer page={t2("nav2")} route="/about" />
    </>
  );
}

function renderJumbotron(theme: any) {
  return (
    <section className="relative container mx-auto px-4 py-6 flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-[900px]">
        <Image
          src={
            theme === "dark"
              ? "/images/suit.png"
              : "/images/suit-light-mode.png"
          }
          alt="Suit Image"
          width={1200}
          height={1200}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <Meteors number={120} />

      <div className="hidden lg:block absolute bottom-[7.5rem] transform -translate-x-1/2 lg:translate-x-0 left-0">
        <ScrollPage sectionLink="#section2" />
      </div>
    </section>
  );
}

function renderSection2(t: any) {
  return (
    <section
      id="section2"
      className="relative container mx-auto px-4 py-20 lg:py-0 min-h-[calc(100vh-80px)] lg:min-h-[40rem] flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4"
    >
      <Typography
        text={t("Section2.title")}
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
            text={t("Section2.button")}
            letterPadding={false}
          />
        </MagneticButton>
      </Link>

      <div className="lg:hidden place-self-center absolute bottom-6">
        <ScrollPage sectionLink="#section2" />
      </div>
    </section>
  );
}

function renderSection3(t: any) {
  return (
    <ScrollBaseAnimation delay={1000} baseVelocity={-1.5}>
      <Typography
        text={t("Section3.title")}
        color="white"
        size="xl5"
        className="lg:pb-20"
      />
    </ScrollBaseAnimation>
  );
}
