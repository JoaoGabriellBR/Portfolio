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
import Image from "next/image";
import { GiTie } from "react-icons/gi";
import { RiPokerClubsFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import { RiPokerSpadesFill } from "react-icons/ri";
import ScrollBaseAnimation from "@/components/text-marquee";
import { BsArrowDownLeft } from "react-icons/bs";
import { DrawCircleText } from "@/components/draw-circle-text";
import { Experience } from "@/components/experience";
import { RiPokerDiamondsFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function About() {
  const t = useTranslations("About");
  const containerStyles = "container mx-auto min-h-screen px-4";
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <main className="flex flex-col gap-y-[10rem] lg:gap-y-[15rem]">
          <div className="relative">
            <Image
              src={
                theme === "dark"
                  ? "/images/second-suit.png"
                  : "/images/second-suit-light-mode.png"
              }
              width={1000}
              height={1000}
              alt=""
              className="absolute top-40 lg:top-[-10rem] right-0 text-[100vw] lg:text-[60vw] text-neutral-600 opacity-20 -scale-x-100 pointer-events-none"
            />
          </div>

          {/* About Me */}
          <section
            className={`${containerStyles} flex flex-col items-start justify-center lg:justify-start text-start`}
          >
            <Typography
              text="Sobre mim"
              color="white"
              size="xl5"
              className="max-w-3xl"
              letterPadding={false}
            />
          </section>

          {/* Competence */}
          <section
            className={`${containerStyles} flex flex-col lg:flex-row items-center justify-center lg:justify-between`}
          >
            <TextReveal paragraph={t("competence")} />
          </section>

          {/* Skills */}

          <section
            className={`container mx-auto px-4 flex flex-col items-center text-center`}
          >
            <RiPokerClubsFill
              aria-label="Icone Poker"
              className="text-lg md:text-xl lg:text-[12rem] text-red-600"
            />

            <Typography
              // text={t("Skills.title")}
              text="Habilidades"
              color="white"
              size="xl5"
              className="mx-auto mt-4 mb-[5rem]"
              style={{ lineHeight: "1.5" }}
            />
          </section>

          <section
            className={`${containerStyles} flex flex-col items-center text-center`}
          >
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full min-h-[10rem] mb-[10rem]">
              <Typography
                text={
                  "Conheça algumas tecnologias que utilizo em meus projetos."
                }
                color="white"
                size="xl2"
                className="w-full lg:w-[60%] text-center lg:text-start"
              />
              <BsArrowDownLeft className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl" />
            </div>
            <Skills />
          </section>

          {/* Experience */}

          <section
            className={`container mx-auto px-4 flex flex-col items-center text-center`}
          >
            <DrawCircleText />
          </section>
          <RiPokerDiamondsFill
            aria-label="Icone Poker"
            className="place-self-center text-lg md:text-xl lg:text-[12rem] text-red-600"
          />

          <section className={`${containerStyles}`}>
            <Typography
              text={t("Experience.section")}
              color="white"
              size="xl2"
              className="text-center lg:hidden mb-[-4rem]"
            />
            <JobTimeline />
          </section>

          {/* <section className="container mx-auto px-4 h-fit">
            <div className="w-full h-full flex flex-row items-center justify-between">
              <div className="w-full h-full flex items-start">
                <Image
                  src="/images/tie.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="object-contain"
                />
              </div>

              <div className="w-full h-full flex flex-col items-end justify-between gap-8">
                <div className="flex flex-col items-start gap-4">
                  <Typography
                    text="Experiência"
                    size="xl3"
                    className="ml-[-10rem]"
                  />
                  <Experience
                    timeline="2024 - presente"
                    jobName="Neway"
                    position="Desenvolvedor Full Stack"
                  />
                  <Experience
                    timeline="2022-presente"
                    jobName="Neway"
                    position="Estágio em Desenvolvimento"
                  />
                </div>
                <div className="flex flex-col items-start gap-4">
                  <Typography
                    text="Experiência"
                    size="xl3"
                    className="ml-[-10rem]"
                  />
                  <Experience
                    timeline="2024 - presente"
                    jobName="Neway"
                    position="Desenvolvedor Full Stack"
                  />
                  <Experience
                    timeline="2022-presente"
                    jobName="Neway"
                    position="Estágio em Desenvolvimento"
                  />
                </div>
              </div>
            </div>
          </section> */}

          {/* Trabalhos em destaque  */}
          <section className={`${containerStyles}`}>
            {/* Título acima dos itens */}
            <div className="text-center lg:text-left mb-6">
              <Typography
                text="Projetos em Destaque"
                color="white"
                size="xl5"
                letterPadding={false}
              />
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
              {/* Texto à esquerda */}
              <div className="lg:w-1/2 w-full text-left">
                <Typography
                  text="Adidas Shopping, 2024"
                  color="white"
                  size="xl2"
                  className="mt-4"
                />
                <Typography
                  text="Plataforma completa de e-commerce."
                  color="white"
                  size="lg"
                  className="mt-4 font-extralight"
                />
                <MagneticButton
                  distance={1}
                  type="3d"
                  className="w-64 h-20 text-2xl p-5 flex flex-row justify-center items-center gap-2"
                >
                  <Typography
                    className="pb-0 pr-0"
                    text={"Conferir projeto"}
                    letterPadding={false}
                    size="md"
                  />
                  <IoIosArrowRoundForward className="text-foreground dark:text-white text-4xl" />
                </MagneticButton>
              </div>

              {/* Imagem à direita com ícone sobreposto */}
              <div className="relative lg:w-1/2 w-full flex justify-center lg:justify-end">
                <Image
                  src="/images/adidas-about.png"
                  width={800}
                  height={800}
                  alt="Adidas"
                  className="object-contain pointer-events-none max-w-full"
                />

                {/* Ícone posicionado no canto superior direito da imagem */}
                <RiPokerSpadesFill
                  aria-label="Ícone Poker"
                  className="absolute top-2 right-2 lg:top-4 lg:right-4 text-xl md:text-3xl lg:text-8xl text-white"
                />
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 flex items-center justify-center">
            <Image
              src="/images/suits.png"
              width={600}
              height={600}
              alt=""
              className="text-[100vw] lg:text-[50vw] -scale-x-100 pointer-events-none"
            />
          </div>

          <section
            className={`container mx-auto px-4 flex flex-col items-center text-center`}
          >
            <RiPokerSpadesFill
              aria-label="Icone Poker"
              className="text-lg md:text-xl lg:text-[12rem] text-red-600"
            />

            <Typography
              // text={t("Skills.title")}
              text="Serviços"
              color="white"
              size="xl5"
              className="mx-auto mt-4 mb-[5rem]"
              style={{ lineHeight: "1.5" }}
            />
          </section>

          <section
            className={`${containerStyles} flex flex-col items-center text-center`}
          >
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full min-h-[10rem] mb-[10rem]">
              <Typography
                text={"Eu poderia te ajudar com..."}
                color="white"
                size="xl2"
                className="w-full lg:w-[60%] text-center lg:text-start"
              />
              <BsArrowDownLeft className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl" />
            </div>
          </section>

          {/* Services */}
          <section
            className={`${containerStyles} flex flex-col justify-center items-center `}
          >
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
      <Footer page="Projetos" route="/projects" />
    </>
  );
}
