import Header from "@/components/header";
import { Hero } from "@/components/ui/hero";
import { Footer } from "@/components/footer";
import { SmoothScrollHero } from "@/components/smooth-scroll-hero";
import Typography from "@/components/ui/typography";
import ButtonHover from "@/components/ui/button-hover";
import HeroTitle from "@/components/ui/hero-title";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1 px-4">
        <div className="container mx-auto max-w-6xl min-h-screen px-4 flex flex-col items-center justify-center space-y-4 text-center mt-[-7rem]">
         
         <div className="flex flex-col items-center justify-center text-center">
            <HeroTitle text="Desenvolvedor" color="white" size="xl" />
            <HeroTitle text="Full Stack" color="silver" size="xl" />
          </div>

        </div>

        <SmoothScrollHero />
      </main>
      <Footer />
    </>
  );
}
