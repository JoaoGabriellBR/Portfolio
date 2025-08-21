"use client";

import { ReactLenis } from "lenis/react";
import { useTranslations } from "next-intl";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Typography from "@/components/ui/typography";
import MyCertifications from "@/components/my-certifications";
import PageWithLoader from "@/components/page-with-loader";
import { ScrollPage } from "@/components/scroll-page";

export default function Certifications() {
  const t = useTranslations("Certifications");

  return (
    <PageWithLoader text={t("section")}>
      <Header />
      <SmoothScrollingContent>
        <MainContent title={t("section")} />
      </SmoothScrollingContent>
      <Footer page={t("footer.projects")} route="/projects" />
    </PageWithLoader>
  );
}

function SmoothScrollingContent({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
      }}
    >
      {children}
    </ReactLenis>
  );
}

function MainContent({ title }: { title: string }) {
  return (
    <main className="flex flex-col gap-y-6 lg:gap-y-10">
      <HeroSection title={title} />
      <CertificationsSection />
    </main>
  );
}

function HeroSection({ title }: { title: string }) {
  return (
    <section className="relative container mx-auto px-4 flex flex-col items-start justify-center text-start pt-12 min-h-[80vh]">
      <Typography
        text={title}
        color="white"
        size="xl5"
        className="mt-[-7rem]"
        letterPadding={false}
      />
      <ScrollIndicator />
    </section>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0">
      <ScrollPage sectionLink="#gallery" />
    </div>
  );
}

function CertificationsSection() {
  return (
    <section className="container mx-auto px-4 min-h-auto">
      <MyCertifications />
    </section>
  );
}
