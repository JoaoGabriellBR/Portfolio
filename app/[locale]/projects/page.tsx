"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Typography from "@/components/ui/typography";
import { ReactLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import GalleryComponent from "@/components/gallery/page";

export default function About() {
  const t = useTranslations("About");

  return (
    <>
      <Header />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <main className=" flex flex-col gap-y-2 lg:gap-y-10">
          <section className="container mx-auto min-h-screen px-4 flex items-center justify-center text-center mt-[-7rem]">
            <Typography
              text="Projetos"
              color="white"
              size="xl5"
              className=""
            />
          </section>

          <GalleryComponent/>
        </main>
      </ReactLenis>
      <Footer />
    </>
  );
}
