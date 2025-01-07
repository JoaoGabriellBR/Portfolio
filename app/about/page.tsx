"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import TextGradientScroll from "@/components/ui/text-gradient";
import { TimelineDemo } from "@/components/timeline-demo";
import HeroTitle from "@/components/ui/hero-title";
import { ReactLenis } from "@studio-freight/react-lenis";
import { GiWolfHead } from "react-icons/gi";
import MagneticButton from "@/components/ui/button-magnetic";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowRedoOutline } from "react-icons/io5";
import { GiDragonOrb } from "react-icons/gi";
import { GiSeaDragon } from "react-icons/gi";
import { GiDragonBreath } from "react-icons/gi";
import { SiSnapdragon } from "react-icons/si";
import { TfiArrowTopRight } from "react-icons/tfi";
import { CardProjects } from "@/components/card-projects";

export default function About() {
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
        <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1 gap-20">
          <GiWolfHead className="text-[40rem] lg:text-[70rem] text-neutral-800 opacity-15 absolute bottom-0 right-0 scale-x-[-1]" />

          {/* About Me */}
          <section className="container mx-auto min-h-screen px-4 flex flex-row items-center justify-between space-y-4 mt-[-4rem]">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-row justify-start items-center gap-2">
                <SiSnapdragon className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-neutral-600" />

                <HeroTitle
                  text="Sobre mim"
                  color="silver"
                  size="very_small"
                  letterPadding={false}
                />
              </div>
              <HeroTitle
                text="We’re driven by creating the most beautiful websites with the best rankings and conversion rates"
                color="white"
                size="sm"
                className="max-w-3xl"
                style={{ lineHeight: 1.3 }}
              />
            </div>

            <div className="h-full pb-40 flex items-end">
              <MagneticButton
                distance={1}
                className="w-40 h-40 lg:w-64 lg:h-64 text-2xl p-5 relative"
              >
                <MagneticButton
                  className="flex flex-col justify-center items-center gap-2"
                  distance={0.5}
                  border={false}
                >
                  <TfiArrowTopRight className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-5xl" />
                  <HeroTitle
                    size="very_small"
                    text="Contato"
                    letterPadding={false}
                  />
                </MagneticButton>
              </MagneticButton>
            </div>
          </section>


          {/* Skills */}
          <section className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-start gap-4">
            
            <div className="flex flex-col justify-center items-center gap-4">
              
              <div className="flex flex-row justify-center items-center gap-2">
                <SiSnapdragon className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-neutral-600" />

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
                size="sm"
                className="max-w-3xl text-center"
                style={{ lineHeight: 1.3 }}
              />

            </div>

            <div className={`max-w-7xl grid grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-8 container mx-auto px-4 md:p-0`}>
              <CardProjects />
            </div>
            
          </section>

          <section className="w-full container mx-auto px-4">
            <video className="rounded-[3rem]" autoPlay loop muted>
              <source src="/videos/aboutme.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </section>

          <section className="w-full min-h-screen container mx-auto px-4">
            <TimelineDemo />
          </section>
        </main>
      </ReactLenis>
      <Footer />
    </>
  );
}
