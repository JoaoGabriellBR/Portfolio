"use client";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProfileForm } from "@/components/form";
import { DrawCircleText } from "@/components/draw-circle-text";

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
          <Image
            src="/images/second-suit.png"
            alt="Suit image"
            width={1000}
            height={1000}
            className="absolute top-0 right-0 -scale-x-100 pointer-events-none hidden lg:block opacity-80"
          />
        </div>
        <main className="flex flex-col items-center lg:items-start justify-center gap-y-2 lg:gap-y-10">
          <section className="container mx-auto px-4 min-h-screen flex flex-col items-center lg:items-start justify-center gap-20 text-center ">
            <DrawCircleText
              firstWord={t("title")}
              secondWord={t("subtitle")}
              textSize="md"
            />
            <ProfileForm />
          </section>
        </main>
      </ReactLenis>
      <Footer page="gmail.com" route="mailTo: joaoname19@gmail.com" />
    </>
  );
}
