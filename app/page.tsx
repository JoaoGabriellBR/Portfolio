import Header from "@/components/header";
import { Jumbotron } from "@/components/jumbotron";
import { Footer } from "@/components/footer";
import { CardProjects } from "@/components/card-projects";
import { HoverImageLinks } from "@/components/hover-image-links";
import { SmoothScrollHero } from "@/components/smooth-scroll-hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1 px-4">
        <Jumbotron title="Desenvolvedor Full Stack" />
        <SmoothScrollHero />
        {/* <HoverImageLinks /> */}
        {/* <div className="h-screen container mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter break-words">
            Meus Projetos
          </h1>
        </div> */}
      </main>
      <Footer />
    </>
  );
}
