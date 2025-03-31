"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ParallaxImages } from "@/components/parallax-images";
import Typography from "@/components/ui/typography";
import { MagneticButton } from "@/components/ui/button-magnetic";
import Projects from "@/components/projects";
import { ReactLenis } from "lenis/react";
import ScrollBaseAnimation from "@/components/text-marquee";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Link } from "@/i18n/navigation";
import { Meteors } from "@/components/ui/meteors";
import { SiDungeonsanddragons } from "react-icons/si";

import { useTranslations } from "next-intl";
import CursorFollow from "@/components/cursor-follow";
import { useState } from "react";
import { GiDragonOrb } from "react-icons/gi";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
  const t = useTranslations("Home");
  const { theme } = useTheme();
  const isMobile = () => window.innerWidth < 768;
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <Header />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <main className="flex flex-col gap-y-2 lg:gap-y-10">
          {/* jumbotron  */}
          {/* <Meteors number={100} /> */}
          <section className="container mx-auto px-4 flex items-center justify-center">
            <Image
              src={
                theme === "dark"
                  ? "/images/suit.png"
                  : "/images/suit-light-mode.png"
              }
              width={1000}
              height={1000}
              alt="Suit Image"
            />
          </section>

          {/* <section className="container mx-auto max-w-6xl min-h-screen px-4 flex flex-col items-center justify-center space-y-4 text-center mt-[-7rem]">
            <div
              onMouseEnter={() => {
                setModal({ active: true, index: 0 });
              }}
              onMouseLeave={() => {
                setModal({ active: false, index: 0 });
              }}
              className="flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <Typography
                text={t("title_jumbotron")}
                color="white"
                size="xl5"
              />
              <Typography
                text={t("subtitle_jumbotron")}
                color="silver"
                size="xl5"
              />
            </div>
            <CursorFollow modal={modal}>
              <div>
                <GiDragonOrb className="text-9xl bg-foreground text-background p-4 rounded-full cursor-pointer" />
              </div>
            </CursorFollow>
          </section> */}

          {/* Section2  */}
          <section className="container mx-auto px-4 py-20 lg:py-0 min-h-[20rem] lg:min-h-[40rem] flex flex-col lg:flex-row justify-between items-center gap-4">
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
                <TfiArrowTopRight className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl" />
                <Typography
                  size="md"
                  text={t("Section2.button")}
                  letterPadding={false}
                />
              </MagneticButton>
            </Link>
          </section>

          <ParallaxImages />

          {/* Section3  */}
          <section className="min-h-20 lg:min-h-80 grid place-content-center">
            <ScrollBaseAnimation delay={1000} baseVelocity={-1.5}>
              <Typography
                text={t("Section3.title")}
                color="silver"
                size="xl5"
                className="lg:pb-20"
              />
            </ScrollBaseAnimation>
          </section>

          <Projects />
        </main>
      </ReactLenis>
      <Footer page="Sobre mim" route="/about" />
    </>
  );
}
