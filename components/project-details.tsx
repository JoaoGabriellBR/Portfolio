"use client";
import Header from "@/components/header";
import { ReactLenis } from "lenis/react";
import Typography from "@/components/ui/typography";
import { MagneticButton } from "@/components/ui/button-magnetic";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Footer from "@/components/footer";
import MonitorMockup from "@/components/ui/monitor-mockup";
import SmartphoneMockup from "@/components/ui/smartphone-mockup";
import { ScrollPage } from "@/components/scroll-page";
import { textSizes } from "@/utils/text-sizes";
import { DrawCircleText } from "@/components/draw-circle-text";
import Projects from "@/components/projects";
import { iconMap } from "@/utils/icons";
import { useTranslations } from "next-intl";

type ProjectData = {
  title: string;
  descriptionKey: string;
  icon: string;
  siteUrl: string;
  desktopImages: string[];
  mobileImages: string[];
  fullImage: string;
};

export default function ProjectDetails({
  project,
  currentProject,
}: {
  project: ProjectData;
  currentProject: string;
}) {
  const Icon = iconMap[project.icon as keyof typeof iconMap];
  const t = useTranslations("Project.project-details");

  return (
    <>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <main className="flex flex-col gap-y-2 lg:gap-y-10">
          {/* Hero */}
          <section className="relative container mx-auto px-4 flex flex-col items-center justify-center space-y-4 text-center pt-12 min-h-[calc(100vh-80px)]">
            <div className="flex flex-row items-center justify-between gap-4 text-center mt-[-7rem]">
              <Icon
                className={`${textSizes.xl5} text-foreground dark:text-white mt-4`}
              />
              <Typography
                text={project.title}
                color="white"
                size="xl5"
                letterPadding={false}
              />
            </div>
            <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0">
              <ScrollPage sectionLink="#project-description" />
            </div>
          </section>

          {/* Description */}
          <section
            id="project-description"
            className="container mx-auto px-4 py-20 lg:py-0 min-h-[20rem] lg:min-h-[40rem] flex flex-col lg:flex-row justify-between items-center gap-4"
          >
            <Typography
              text={t(project.descriptionKey)}
              color="white"
              size="xl2"
              className="w-full lg:w-[60%] text-center lg:text-start"
            />
            <Link href={project.siteUrl} target="blank">
              <MagneticButton
                distance={1}
                type="3d"
                className="w-40 h-40 lg:w-64 lg:h-64 flex flex-col justify-center items-center gap-2 text-2xl p-5"
              >
                <TfiArrowTopRight
                  className={`${textSizes.xl6} text-foreground dark:text-white`}
                />
                <Typography
                  size="md"
                  text={t("viewSite")}
                  letterPadding={false}
                />
              </MagneticButton>
            </Link>
          </section>

          {/* Full Image */}
          <section className="w-full mx-auto px-4 min-h-[50vh] lg:min-h-screen mb-16 lg:mb-0 flex items-start justify-center">
            <MonitorMockup>
              <Image
                src={project.fullImage}
                alt="Mockup image"
                fill
                className="rounded-[3rem] h-[90%]"
              />
            </MonitorMockup>
          </section>

          {/* Mobile Mockups */}
          <section className="w-full min-h-screen flex items-center rounded-[2rem]">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16 flex-wrap">
              {project.mobileImages.map((src, i) => (
                <SmartphoneMockup key={i}>
                  <Image
                    src={src}
                    alt={`Mockup ${i + 1}`}
                    fill
                    className="rounded-[3rem] h-[90%]"
                  />
                </SmartphoneMockup>
              ))}
            </div>
          </section>

          {/* Desktop Mockups */}
          <section className="w-full min-h-screen mt-[8rem]">
            {project.desktopImages.map((src, i) => (
              <div
                key={i}
                className="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </section>

          {/* Call to Action */}
          <section className="min-h-[calc(8vh)] lg:min-h-[calc(50vh)] mt-[10rem] flex flex-col items-center justify-center">
            <DrawCircleText
              firstWord={t("next").split(" ")[0]}
              secondWord={t("next").split(" ")[1]}
              textSize="lg"
            />
            <Projects currentProject={currentProject} />
          </section>
        </main>
      </ReactLenis>
      <Footer page={t("footer.contact")} route="/contact" />
    </>
  );
}
