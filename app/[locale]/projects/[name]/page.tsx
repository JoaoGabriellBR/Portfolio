"use client";
import Header from "@/components/header";
// import { ReactLenis } from "@studio-freight/react-lenis";
import { notFound } from "next/navigation";
import Typography from "@/components/ui/typography";
import { MagneticButton } from "@/components/ui/button-magnetic";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { SiAdidas } from "react-icons/si";

export default function ProjectDetails({ params }: any) {
  //   const { name } = await params;
  //   if (!name) return notFound();

  const t = useTranslations("Home");

  return (
    <>
      <Header />
      {/* <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      > */}
        <main className="flex flex-col gap-y-2 lg:gap-y-10">
          <section className="container mx-auto min-h-screen px-4 flex flex-col items-center justify-center space-y-4 text-center mt-[-7rem]">
            <div className="flex flex-row items-center justify-between gap-4 text-center">
              <SiAdidas className="text-[10rem]" />
              <Typography text="adidas" color="white" size="xl5" />
            </div>
          </section>

          <section className="container mx-auto px-4 py-20 lg:py-0 min-h-[20rem] lg:min-h-[40rem] flex flex-col lg:flex-row justify-between items-center gap-4">
            <Typography
              text="Plataforma de e-commerce completa, fornecendo uma enorme variedade de produtos e um processo de pagamento fácil e rápido."
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
                <TfiArrowTopRight className="bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl lg:text-6xl" />
                <Typography size="md" text="Ver site" letterPadding={false} />
              </MagneticButton>
            </Link>
          </section>
        </main>
      {/* </ReactLenis> */}
    </>
  );
}
