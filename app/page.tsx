import Header from "@/components/header";
import { Hero } from "@/components/ui/hero";
import { Footer } from "@/components/footer";
import { SmoothScrollHero } from "@/components/smooth-scroll-hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-rows-[auto_1fr_auto] grid-cols-1 px-4">
        <Hero
          title="Desenvolvedor focado"
          subtitle="em aplicações web e mobile"
          size="md"
        />
        <SmoothScrollHero />
      </main>
      <Footer />
    </>
  );
}
