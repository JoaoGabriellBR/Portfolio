"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { ParallaxImages } from "@/components/parallax-images";
import HeroTitle from "@/components/ui/hero-title";
import MagneticButton from "@/components/ui/button-magnetic";
import Projects from "@/components/projects";
import { ReactLenis } from "@studio-freight/react-lenis";
import ScrollBaseAnimation from "@/components/text-marquee";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Link } from "@/i18n/navigation";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <Header />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <main className="flex flex-col gap-y-2 lg:gap-y-10">
          {/* jumbotron  */}
          <section className="container mx-auto max-w-6xl min-h-screen px-4 flex flex-col items-center justify-center space-y-4 text-center mt-[-7rem]">
            <div className="flex flex-col items-center justify-center text-center uppercase">
              <HeroTitle text={t("title_jumbotron")} color="white" size="xxl" />
              <HeroTitle
                text={t("subtitle_jumbotron")}
                color="silver"
                size="xxl"
              />
            </div>
          </section>

          {/* Section2  */}
          <section className="container mx-auto px-4 py-20 lg:py-0 min-h-[20rem] lg:min-h-[40rem] flex flex-col lg:flex-row justify-between items-center gap-4">
            <HeroTitle
              text={t("Section2.title")}
              color="white"
              size="md"
              className="w-full lg:w-[60%] text-center lg:text-start"
            />
            <Link href="/about">
              <MagneticButton
                distance={1}
                className="w-40 h-40 lg:w-64 lg:h-64 text-2xl p-5"
              >
                <MagneticButton
                  className="flex flex-col justify-center items-center gap-2"
                  distance={0.5}
                  border={false}
                >
                  <TfiArrowTopRight className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl" />
                  <HeroTitle
                    size="very_small"
                    text={t("Section2.button")}
                    letterPadding={false}
                  />
                </MagneticButton>
              </MagneticButton>
            </Link>
          </section>

          <ParallaxImages />

          {/* Section3  */}
          <section className="min-h-20 lg:min-h-80 grid place-content-center">
            <ScrollBaseAnimation delay={1000} baseVelocity={-1.5}>
              <HeroTitle
                text={t("Section3.title")}
                color="silver"
                size="xxl"
                className="lg:pb-20"
              />
            </ScrollBaseAnimation>
          </section>

          <Projects />
        </main>
      </ReactLenis>
      <Footer />
    </>
  );
}
