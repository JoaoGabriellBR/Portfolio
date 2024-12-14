import Header from "@/components/header";
import { Jumbotron } from "@/components/jumbotron";
import { Footer } from "@/components/footer";
import TextGradientScroll from "@/components/ui/text-gradient";
import Image from "next/image";
import AdidasBanner from "@/app/assets/adidas-banner.png";

export default function About() {
  return (
    <>
      <Header />
      <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1">

        {/* Section: Jumbotron */}
        <section className="w-full h-screen grid-cols-1 grid-rows-2">
          <Jumbotron title="Sobre Mim" />
        </section>

        {/* Section: About Text */}
        <section className="w-full container mx-auto px-4 max-w-5xl pb-20 sm:pb-32 lg:pb-40">
          <TextGradientScroll
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-snug"
            text="Sou um Desenvolvedor Full Stack com mais de 2 anos de experiência em aplicações web, competente em React, React Native, Next.js, Node.js, TypeScript, MySQL, Docker e AWS. Habilidade na criação e manutenção de APIs, landing pages, portais de back office e lojas virtuais. Além do código, atuo no monitoramento de desempenho de aplicações utilizando New Relic."
          />
        </section>

        {/* Section: Banner Image */}
        <section className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen bg-no-repeat bg-cover bg-center bg-fixed relative">
          <Image
            src={AdidasBanner}
            alt="Adidas Banner"
            layout="fill"
            objectFit="cover"
            priority
            className="transition-all duration-1000 ease-in-out hover:scale-110"
          />
        </section>

      </main>
      <Footer />
    </>
  );
}
