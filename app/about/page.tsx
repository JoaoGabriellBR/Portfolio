"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import TextGradientScroll from "@/components/ui/text-gradient";
import { TimelineDemo } from "@/components/timeline-demo";
import HeroTitle from "@/components/ui/hero-title";
import { ReactLenis } from "@studio-freight/react-lenis";

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
          <div className="container mx-auto max-w-6xl min-h-screen px-4 flex flex-col items-center justify-center space-y-4 text-center mt-[-4rem]">
            <HeroTitle text="Sobre" color="white" size="lg" />
            <HeroTitle text="Mim" color="silver" size="lg" />
          </div>

          <section className="w-full container mx-auto px-4">
            <TextGradientScroll
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center bg-clip-text  "
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
