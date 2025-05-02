"use client";

import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProfileForm } from "@/components/form";
import { DrawCircleText } from "@/components/draw-circle-text";
import PageWithLoader from "@/components/page-with-loader";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const { theme } = useTheme();

  return (
    <PageWithLoader text={t("section")}>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        {/* <BackgroundImage theme={theme} /> */}
        <MainContent
          title={t("title")}
          subtitle={t("subtitle")}
          theme={theme}
        />
      </ReactLenis>
      <Footer page="gmail.com" route="mailto:joaoname19@gmail.com" />
    </PageWithLoader>
  );
}

// function BackgroundImage({ theme }: { theme?: string }) {
//   const imageSrc =
//     theme === "dark"
//       ? "/images/suit-contact.png"
//       : "/images/suit-contact-light-mode.png";

//   return (
//     <div className="relative">
//       <Image
//         src={imageSrc}
//         alt="Suit"
//         width={1000}
//         height={1000}
//         priority
//         className="absolute top-0 right-0 -scale-x-100 pointer-events-none hidden lg:block opacity-100 dark:opacity-80"
//       />
//     </div>
//   );
// }

function MainContent({
  title,
  subtitle,
  theme,
}: {
  title: string;
  subtitle: string;
  theme: any;
}) {
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
