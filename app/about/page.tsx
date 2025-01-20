"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { JobTimeline } from "@/components/job-timeline";
import HeroTitle from "@/components/ui/hero-title";
import { ReactLenis } from "@studio-freight/react-lenis";
import { GiWolfHead } from "react-icons/gi";
import MagneticButton from "@/components/ui/button-magnetic";
import { SiSnapdragon } from "react-icons/si";
import { TfiArrowTopRight } from "react-icons/tfi";
import { CardProjects } from "@/components/card-projects";
import { Services } from "@/components/services";
import TextGradientScroll from "@/components/ui/text-gradient";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Header />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <main className="relative flex flex-col gap-y-20">
          {/* Background Decorative Icon */}
          <GiWolfHead
            aria-hidden="true"
            className="text-[100vw] lg:text-[56vw] text-neutral-600 opacity-10 absolute top-40 lg:top-[-10rem] right-0 -scale-x-100 pointer-events-none"
          />

          {/* About Me */}
          <section className="container mx-auto min-h-screen px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 py-20">
            <div className="flex flex-col gap-6 mt-[-7rem]">
              <div className="flex items-center gap-3">
                <SiSnapdragon
                  aria-label="Icone Snapdragon"
                  className="text-lg md:text-xl lg:text-2xl text-neutral-600"
                />
                <HeroTitle
                  text="João Gabriel Silva"
                  color="silver"
                  size="very_small"
                  letterPadding={false}
                />
              </div>
              <HeroTitle
                text="Desenvolvedor de Software focado em aplicações web e mobile."
                color="white"
                size="md"
                className="max-w-3xl"
                style={{ lineHeight: "1.5" }}
              />
            </div>
            <div className="flex justify-center items-end">
              <Link href="/contact">
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
                      text="Contato"
                      letterPadding={false}
                    />
                  </MagneticButton>
                </MagneticButton>
              </Link>
            </div>
          </section>

          {/* Competence */}
          <section className="container mx-auto min-h-screen px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
            <TextGradientScroll
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-normal break-words text-foreground font-normal"
              text="Experiência na criação e manutenção de APIs, landing pages, portais de back office e lojas virtuais. Além do código, atuo no monitoramento de desempenho de aplicações e na sustentação de sistemas."
            />
          </section>

          {/* Skills */}
          <section className="container mx-auto min-h-screen px-4 flex flex-col items-center gap-8 py-20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <SiSnapdragon
                  aria-label="Icone Snapdragon"
                  className="text-lg md:text-xl lg:text-2xl text-neutral-600"
                />
                <HeroTitle
                  text="Habilidades"
                  color="silver"
                  size="very_small"
                  letterPadding={false}
                />
              </div>
              <HeroTitle
                text="Algumas tecnologias que utilizo"
                color="white"
                size="md"
                className="max-w-3xl mx-auto mt-4"
                style={{ lineHeight: "1.5" }}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
              <CardProjects />
            </div>
          </section>

          {/* Experience */}
          <section className="container mx-auto min-h-screen px-4 py-20">
            <HeroTitle
              text="Experiência"
              color="white"
              size="md"
              className="text-center lg:hidden"
            />
            <JobTimeline />
          </section>

          {/* Services */}
          <section className="container mx-auto min-h-screen px-4 flex flex-col justify-center items-center gap-8 pt-20">
            <HeroTitle
              text="Eu poderia te ajudar com..."
              color="white"
              size="md"
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
