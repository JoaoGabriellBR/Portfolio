"use client";

import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProfileForm } from "@/components/form";
import { DrawCircleText } from "@/components/draw-circle-text";
import ScrollToTop from "@/components/scroll-to-top";

export default function Contact() {
  const t = useTranslations("Contact");
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <ScrollToTop />
        <MainContent
          title={t("title")}
          subtitle={t("subtitle")}
          theme={theme}
        />
      </ReactLenis>
      <Footer page="gmail.com" route="mailto:joaoname19@gmail.com" />
    </>
  );
}

type MainContentProps = {
  title: string;
  subtitle: string;
  theme: string | undefined;
};

function MainContent({ title, subtitle, theme }: MainContentProps) {
  const imageSrc =
    theme === "dark"
      ? "/images/suit-contact.png"
      : "/images/suit-contact-light-mode.png";

  return (
    <main className="container mx-auto px-4 flex flex-wrap flex-row justify-center lg:justify-between items-center gap-y-2 lg:gap-y-4">
      <section className="w-full lg:w-[40%] min-h-screen flex flex-col items-center lg:items-start justify-center gap-20 text-center">
        <DrawCircleText firstWord={title} secondWord={subtitle} textSize="md" />
        <ProfileForm />
      </section>

      <Image
        src={imageSrc}
        alt="Suit"
        width={1500}
        height={1500}
        priority
        className="w-full lg:w-[60%] lg:-mr-[10rem] object-contain pointer-events-none opacity-100 dark:opacity-80"
      />
    </main>
  );
}
