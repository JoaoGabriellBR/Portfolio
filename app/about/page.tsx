import Header from "@/components/header";
import { Jumbotron } from "@/components/jumbotron";
import { Footer } from "@/components/footer";
import TextGradientScroll from "@/components/ui/text-gradient";
import Image from "next/image";
import AdidasBanner from "@/app/assets/adidas-banner.png";
import { TimelineDemo } from "@/components/timeline-demo";

export default function About() {
  return (
    <>
      <Header />
      <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1 gap-40">
        <Jumbotron title="Sobre Mim" />

        <section className="w-full container mx-auto px-4 max-w-5xl pb-20 sm:pb-32 lg:pb-40">
          <TextGradientScroll
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-snug"
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
      <Footer />
    </>
  );
}
