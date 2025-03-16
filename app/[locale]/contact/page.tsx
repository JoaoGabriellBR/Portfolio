"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProfileForm } from "@/components/form";
import Typography from "@/components/ui/typography";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useTranslations } from "next-intl";
import { GiWolfHead } from "react-icons/gi";
import { SiDungeonsanddragons } from "react-icons/si";


export default function Contact() {
  const t = useTranslations("Contact.Jumbotron");

  return (
    <>
      <Header />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <div className="relative">
          <SiDungeonsanddragons
            aria-hidden="true"
            className="text-[100vw] lg:text-[58vw] text-neutral-600 opacity-20 absolute top-40 lg:top-[-10rem] right-0 -scale-x-100 pointer-events-none"
          />
        </div>
        <main className="flex flex-col items-center lg:items-start justify-center gap-y-2 lg:gap-y-10">
          <section className="container mx-auto px-4 min-h-screen flex flex-col items-center lg:items-start justify-center space-y-4 text-center mt-[-4rem]">
            <div className="w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-start uppercase">
              <Typography text={t("title")} color="white" size="xl3" />
              <Typography text={t("subtitle")} color="silver" size="xl3" />
            </div>
            <ProfileForm />
          </section>
        </main>
      </ReactLenis>
      <Footer />
    </>
  );
}
