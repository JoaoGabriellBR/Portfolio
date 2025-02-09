"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { ProfileForm } from "@/components/form";
import HeroTitle from "@/components/ui/hero-title";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Contact() {
  return (
    <>
      <Header />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <main className="flex flex-col gap-y-2 lg:gap-y-10">
          <section className="container mx-auto px-4 min-h-screen flex flex-col items-start justify-center space-y-4 text-center mt-[-4rem]">
            <div className="w-full flex flex-col items-start justify-center text-center uppercase">
              <HeroTitle text="Me conte" color="white" size="xl" />
              <HeroTitle text="Suas ideias" color="silver" size="xl" />
            </div>
            <ProfileForm />
          </section>
        </main>
      </ReactLenis>
      <Footer />
    </>
  );
}
