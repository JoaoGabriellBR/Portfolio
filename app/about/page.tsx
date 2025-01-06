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
        <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1 gap-40">
          <GiWolfHead className="text-[40rem] lg:text-[70rem] text-neutral-800 opacity-15 absolute bottom-0 right-0 scale-x-[-1]" />
          
          <div className="container mx-auto min-h-screen px-4 flex flex-row items-center justify-between space-y-4 mt-[-4rem]">
            <HeroTitle
              text="We’re driven by creating the most beautiful websites with the best rankings and conversion rates"
              color="white"
              size="sm"
              className="max-w-3xl"
            />

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
                  <IoIosArrowRoundForward className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl" />
                  <HeroTitle
                    size="paragraphy"
                    text="Contato"
                    letterPadding={false}
                  />
                </MagneticButton>
              </MagneticButton>
            </div>

          </div>

          <section className="w-full min-h-screen container mx-auto px-4 flex flex-col justify-center items-center">
            <TextGradientScroll
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center bg-clip-text"
              text="Sou um Desenvolvedor Full Stack com mais de 2 anos de experiência em aplicações web, competente em React, React Native, Next.js, Node.js, TypeScript, MySQL, Docker e AWS. Habilidade na criação e manutenção de APIs, landing pages, portais de back office e lojas virtuais. Além do código, atuo no monitoramento de desempenho de aplicações utilizando New Relic."
            />
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
