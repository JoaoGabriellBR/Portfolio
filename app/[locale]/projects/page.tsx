"use client";

import { ReactLenis } from "lenis/react";
import { useTranslations } from "next-intl";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Typography from "@/components/ui/typography";
import Projects from "@/components/projects";
import PageWithLoader from "@/components/page-with-loader";
import { ScrollPage } from "@/components/scroll-page";

export default function ProjectsPage() {
  const t = useTranslations("Project");

  return (
    <PageWithLoader text={t("section")}>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <MainContent sectionTitle={t("section")} />
      </ReactLenis>
      <Footer page={t("projectDetails.footer.contact")} route="/contact" />
    </PageWithLoader>
  );
}

function MainContent({ sectionTitle }: { sectionTitle: string }) {
  return (
    <main className="flex flex-col gap-y-6 lg:gap-y-10">
      <HeroSection title={sectionTitle} />
      <ProjectsSection />
    </main>
  );
}

function HeroSection({ title }: { title: string }) {
  return (
    <section className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center pt-12 min-h-[calc(100vh-80px)]">
      <Typography
        text={title}
        color="white"
        size="xl5"
        className="-mt-[7rem]"
        letterPadding={false}
      />
      <ScrollPageNavigation />
    </section>
  );
}

function ScrollPageNavigation() {
  return (
    <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0">
      <ScrollPage sectionLink="#projects" />
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4">
      <Projects />
    </section>
  );
}
