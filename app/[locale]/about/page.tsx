"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { JobTimeline } from "@/components/job-timeline";
import Typography from "@/components/ui/typography";
import { ReactLenis } from "@studio-freight/react-lenis";
import { GiWolfHead } from "react-icons/gi";
import MagneticButton from "@/components/ui/button-magnetic";
import { SiSnapdragon } from "react-icons/si";
import { TfiArrowTopRight } from "react-icons/tfi";
import Skills from "@/components/skills";
import { Services } from "@/components/services";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import TextRevealByWord from "@/components/ui/text-reveal";

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
          {/* Background Decorative Icon */}

          {/* <div className="relative">
            <GiWolfHead
              aria-hidden="true"
              className="text-[100vw] lg:text-[56vw] text-neutral-600 opacity-10 absolute top-40 lg:top-[-10rem] right-0 -scale-x-100 pointer-events-none"
            />
          </div> */}

          {/* About Me */}
          <section className="container mx-auto min-h-screen px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
            <div className="flex flex-col gap-6 mt-[-7rem]">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <SiSnapdragon
                  aria-label="Icone Snapdragon"
                  className="text-lg md:text-xl lg:text-2xl text-neutral-600"
                />
                <Typography
                  text="João Gabriel Silva"
                  color="silver"
                  size="md"
                  letterPadding={false}
                />
              </div>

              <Typography
                text={t("Jumbotron.title")}
                color="white"
                size="xl2"
                className="max-w-3xl text-center lg:text-start"
                style={{ lineHeight: "1.5" }}
              />
            </div>

            <div className="flex justify-center items-end">
              <Link href="/contact">
                <MagneticButton
                  distance={1}
                  type="3d"
                  className="w-40 h-40 lg:w-64 lg:h-64 text-2xl p-5 flex flex-col justify-center items-center gap-2"
                >
                  <TfiArrowTopRight className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl" />
                  <Typography
                    size="md"
                    text={t("Jumbotron.button")}
                    letterPadding={false}
                  />
                </MagneticButton>
              </Link>
            </div>
          </section>

          {/* Competence */}
          <section className="container mx-auto min-h-screen px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
            <TextRevealByWord paragraph={t("competence")} />
          </section>

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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
              <Skills />
            </div>
          </section>

          {/* Experience */}
          <section className="container mx-auto min-h-screen px-4 py-20">
            <Typography
              text={t("Experience.section")}
              color="white"
              size="xl2"
              className="text-center lg:hidden mb-[-4rem]"
            />
            <JobTimeline />
          </section>

          {/* Services */}
          <section className="container mx-auto min-h-screen px-4 flex flex-col justify-center items-center gap-8 pt-20">
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
