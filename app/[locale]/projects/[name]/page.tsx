"use client";
import Header from "@/components/header";
import { ReactLenis } from "lenis/react";
import { notFound } from "next/navigation";
import Typography from "@/components/ui/typography";
import { MagneticButton } from "@/components/ui/button-magnetic";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { SiAdidas } from "react-icons/si";
import Image from "next/image";
import Footer from "@/components/footer";
import MonitorMockup from "@/components/ui/monitor-mockup";
import SmartphoneMockup from "@/components/ui/smartphone-mockup";
import { FaArrowTrendUp } from "react-icons/fa6";
import Projects from "@/components/projects";
import { ScrollPage } from "@/components/scroll-page";
import { textSizes } from "@/utils/text-sizes";
import { DrawCircleText } from "@/components/draw-circle-text";

export default function ProjectDetails({ params }: any) {
  //   const { name } = await params;
  //   if (!name) return notFound();

  const t = useTranslations("Home");

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
          <section className="relative container mx-auto px-4 flex flex-col items-center justify-center space-y-4 text-center pt-12 min-h-[calc(100vh-80px)]">
            <div className="flex flex-row items-center justify-between gap-4 text-center mt-[-7rem]">
              <SiAdidas
                className={`${textSizes.xl5} text-foreground dark:text-white mt-4`}
              />
              <Typography
                text="adidas"
                color="white"
                size="xl5"
                letterPadding={false}
              />
            </div>

            <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0">
              <ScrollPage sectionLink="#project-description" />
            </div>
          </section>

          <section
            id="project-description"
            className="container mx-auto px-4 py-20 lg:py-0 min-h-[20rem] lg:min-h-[40rem] flex flex-col lg:flex-row justify-between items-center gap-4"
          >
            <Typography
              text="Plataforma de e-commerce completa, com ampla variedade de produtos e pagamento rápido e intuitivo."
              color="white"
              size="xl2"
              className="w-full lg:w-[60%] text-center lg:text-start"
            />
            <Link href="/about">
              <MagneticButton
                distance={1}
                type="3d"
                className="w-40 h-40 lg:w-64 lg:h-64 flex flex-col justify-center items-center gap-2 text-2xl p-5"
              >
                <TfiArrowTopRight
                  className={`${textSizes.xl6} text-foreground dark:text-white`}
                />
                <Typography size="md" text="Ver site" letterPadding={false} />
              </MagneticButton>
            </Link>
          </section>

          <section className="w-full mx-auto px-4 min-h-[50vh] lg:min-h-screen mb-16 lg:mb-0 flex items-start justify-center">
            <MonitorMockup>
              <Image
                src="/images/adidas-mockup2.png"
                alt="Mockup image"
                fill
                className="rounded-[3rem] h-[90%]"
              />
            </MonitorMockup>
          </section>

          <section className="w-full min-h-screen flex items-center rounded-[2rem]">
            
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16 flex-wrap">
              <SmartphoneMockup>
                <Image
                  src="/images/mockup-adidas-mobile-1.png"
                  alt="Mockup image"
                  fill
                  className="rounded-[3rem] h-[90%]"
                />
              </SmartphoneMockup>
              <SmartphoneMockup>
                <Image
                  src="/images/mockup-adidas-mobile-2.png"
                  alt="Mockup image"
                  fill
                  className="rounded-[3rem] h-[90%]"
                />
              </SmartphoneMockup>
              <SmartphoneMockup>
                <Image
                  src="/images/mockup-adidas-mobile-3.png"
                  alt="Mockup image"
                  fill
                  className="rounded-[3rem] h-[90%]"
                />
              </SmartphoneMockup>
            </div>

          </section>

          <section className="container mx-auto px-4 min-h-screen flex items-center justify-center">
            <div className="overflow-hidden rounded-[3rem] group">
              <Image
                src="/images/adidas-mockup1.png"
                alt="Mockup image"
                width={1800}
                height={1800}
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </section>

          <section className="min-h-[calc(8vh)] lg:min-h-[calc(50vh)] flex flex-col items-center justify-center">
            <DrawCircleText
              firstWord="Próximo"
              secondWord="Projeto..."
              textSize="lg"
            />
          </section>
          <Projects />
        </main>
      </ReactLenis>
      <Footer page="Contato" route="/contact" />
    </>
  );
}
