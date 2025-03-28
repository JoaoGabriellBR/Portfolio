"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { JobTimeline } from "@/components/job-timeline";
import Typography from "@/components/ui/typography";
import { ReactLenis } from "lenis/react";
import { MagneticButton } from "@/components/ui/button-magnetic";
import { SiSnapdragon } from "react-icons/si";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Services } from "@/components/services";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { TextReveal } from "@/components/ui/text-reveal";
import Skills from "@/components/skills";
import { SiDungeonsanddragons } from "react-icons/si";

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
          <div className="relative">
            <SiDungeonsanddragons
              aria-hidden="true"
              className="text-[100vw] lg:text-[58vw] text-neutral-600 opacity-20 absolute top-40 lg:top-[-10rem] right-0 -scale-x-100 pointer-events-none"
            />
          </div>

          {/* About Me */}
          <section className="container mx-auto min-h-screen px-4 flex items-center justify-start text-start mt-[-7rem]">
            <Typography
              text="Sobre mim"
              color="white"
              size="xl5"
              className="max-w-3xl"
            />
          </section>

          {/* Competence */}
          {/* <section className="container mx-auto min-h-screen px-6 lg:px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
            <TextReveal paragraph={t("competence")} />
          </section> */}

          {/* Experience */}
          {/* <section className="container mx-auto min-h-screen px-4 py-20">
            <Typography
              text={t("Experience.section")}
              color="white"
              size="xl2"
              className="text-center lg:hidden mb-[-4rem]"
            />
            <JobTimeline />
          </section> */}

          {/* Skills */}
          <section className="container mx-auto min-h-screen px-4 flex flex-col items-center gap-8 py-20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <SiSnapdragon
                  aria-label="Icone Snapdragon"
                  className="text-lg md:text-xl lg:text-2xl text-neutral-600"
                />
                <Typography
                  text={t("Skills.section")}
                  color="silver"
                  size="md"
                  letterPadding={false}
                />
              </div>
              <Typography
                text={t("Skills.title")}
                color="white"
                size="xl2"
                className="max-w-3xl mx-auto mt-4"
                style={{ lineHeight: "1.5" }}
              />
            </div>
            <Skills />
          </section>

          {/* Services */}
          <section className="container mx-auto min-h-screen px-6 lg:px-4 flex flex-col justify-center items-center gap-8 pt-20">
            <Typography
              text={t("Services.section")}
              color="white"
              size="xl2"
              className="text-center"
              style={{ lineHeight: "1.5" }}
            />
            <Services />
          </section>
        </main>
      </ReactLenis>
      <Footer />
    </>
  );
}
