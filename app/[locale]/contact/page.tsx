"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { ProfileForm } from "@/components/form";
import Typography from "@/components/ui/typography";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useTranslations } from "next-intl";
import { GiWolfHead } from "react-icons/gi";

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
        <main className="flex flex-col gap-y-2 lg:gap-y-10">
          <section className="container mx-auto px-4 min-h-screen flex flex-col items-start justify-center space-y-4 text-center mt-[-4rem]">
            <div className="w-full flex flex-col items-start justify-center text-center uppercase">
              <Typography text={t("title")} color="white" size="xl" />
              <Typography text={t("subtitle")} color="silver" size="xl" />
            </div>
            <ProfileForm />
          </section>
        </main>
      </ReactLenis>
      <Footer />
    </>
  );
}
