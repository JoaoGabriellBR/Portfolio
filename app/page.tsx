"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { ParallaxImages } from "@/components/smooth-scroll-hero";
import HeroTitle from "@/components/ui/hero-title";
import MagneticButton from "@/components/ui/button-magnetic";
import Projects from "@/components/projects";
import { ReactLenis } from "@studio-freight/react-lenis";
import ScrollBaseAnimation from "@/components/text-marquee";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Home() {
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
        <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1 px-4">

          <section className="container mx-auto max-w-6xl min-h-screen px-4 flex flex-col items-center justify-center space-y-4 text-center mt-[-7rem]">

            <div className="flex flex-col items-center justify-center text-center">
              <HeroTitle text="Desenvolvedor" color="white" size="xxl" />
              <HeroTitle text="Full Stack" color="silver" size="xxl" />
            </div>
          </section>

          <section className="container mx-auto px-4 py-20 lg:py-0 min-h-[20rem] lg:min-h-[40rem] flex flex-col lg:flex-row justify-between items-center gap-4">
            <HeroTitle
              text="Projeto, desenvolvo e crio aplicações otimizadas por meio de boas práticas de desenvolvimento."
              color="white"
              size="md"
              className="w-full lg:w-[60%] text-center lg:text-start"
            />
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
                  text="Sobre Mim"
                  letterPadding={false}
                />
              </MagneticButton>
            </MagneticButton>
          </section>

          <section className="">
            <ParallaxImages />
          </section>

          <section className="min-h-20 lg:min-h-80 grid place-content-center">
            <ScrollBaseAnimation
              delay={500}
              baseVelocity={-3}
            >
              <HeroTitle
                text=" • Alguns projetos recentes"
                color="white"
                size="lg"
              />
            </ScrollBaseAnimation>

            <ScrollBaseAnimation delay={500} baseVelocity={3}>
              <HeroTitle
                text="• Alguns projetos recentes"
                color="silver"
                size="lg"
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
