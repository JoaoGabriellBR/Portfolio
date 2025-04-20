"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactLenis } from "lenis/react";
import Typography from "@/components/ui/typography";
import { MagneticButton } from "@/components/ui/button-magnetic";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import MonitorMockup from "@/components/ui/monitor-mockup";
import SmartphoneMockup from "@/components/ui/smartphone-mockup";
import { ScrollPage } from "@/components/scroll-page";
import { DrawCircleText } from "@/components/draw-circle-text";
import Projects from "@/components/projects";
import { iconMap } from "@/utils/icons";
import { textSizes } from "@/utils/text-sizes";
import { useTranslations } from "next-intl";

type ProjectData = {
  title: string;
  descriptionKey: string;
  icon: string;
  siteUrl: string;
  desktopImages: string[];
  mobileImages: string[];
  smallImages: string[];
  fullImage: string;
};

type ProjectDetailsProps = {
  project: ProjectData;
  currentProject: string;
};

export default function ProjectDetails({
  project,
  currentProject,
}: ProjectDetailsProps) {
  const Icon = iconMap[project.icon as keyof typeof iconMap];
  const t = useTranslations("Project.project-details");

  return (
    <>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <main className="flex flex-col gap-y-2 lg:gap-y-10">
          {renderHero(project.title, Icon)}
          {renderDescriptionSection(
            t(project.descriptionKey),
            project.siteUrl,
            t("viewSite")
          )}
          {renderFullImage(project.fullImage)}

          {!!project.mobileImages?.length &&
            renderMobileMockups(project.mobileImages)}
          {!!project.desktopImages?.length &&
            renderDesktopMockups(project.desktopImages)}
          {!!project.smallImages?.length &&
            renderSmallImages(project.smallImages, project.title)}

          {renderCallToAction(t("next"), currentProject)}
        </main>
      </ReactLenis>
      <Footer page={t("footer.contact")} route="/contact" />
    </>
  );
}

// Subcomponent render functions

function renderHero(title: string, Icon: React.ElementType) {
  return (
    <section className="relative container mx-auto px-4 flex flex-col items-center justify-center space-y-4 text-center pt-12 min-h-[calc(100vh-80px)]">
      <div className="flex flex-row items-center justify-between gap-4 text-center mt-[-7rem]">
        <Icon className={`${textSizes.xl5} text-foreground dark:text-white`} />
        <Typography
          text={title}
          color="white"
          size="xl5"
          letterPadding={false}
        />
      </div>
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0">
        <ScrollPage sectionLink="#project-description" />
      </div>
    </section>
  );
}

function renderDescriptionSection(
  description: string,
  siteUrl: string,
  buttonText: string
) {
  return (
    <section
      id="project-description"
      className="container mx-auto px-4 py-20 lg:py-0 min-h-[20rem] lg:min-h-[40rem] flex flex-col lg:flex-row justify-between items-center gap-4"
    >
      <Typography
        text={description}
        color="white"
        size="xl2"
        className="w-full lg:w-[60%] text-center lg:text-start"
      />
      <Link href={siteUrl} target="blank">
        <MagneticButton
          distance={1}
          type="3d"
          className="w-40 h-40 lg:w-64 lg:h-64 flex flex-col justify-center items-center gap-2 text-2xl p-5"
        >
          <TfiArrowTopRight
            className={`${textSizes.xl6} text-foreground dark:text-white`}
          />
          <Typography size="md" text={buttonText} letterPadding={false} />
        </MagneticButton>
      </Link>
    </section>
  );
}

function renderFullImage(imageSrc: string) {
  return (
    <section className="w-full mx-auto px-4 min-h-[50vh] lg:min-h-screen mb-16 lg:mb-0 flex items-start justify-center">
      <MonitorMockup>
        <Image
          src={imageSrc}
          alt="Mockup image"
          fill
          className="rounded-[3rem] h-[90%]"
        />
      </MonitorMockup>
    </section>
  );
}

function renderMobileMockups(images: string[]) {
  return (
    <section className="w-full min-h-screen flex items-center rounded-[2rem]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16 flex-wrap">
        {images.map((src, i) => (
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
  );
}

function renderDesktopMockups(images: string[]) {
  return (
    <section className="w-full min-h-screen mt-[8rem]">
      {images.map((src, i) => (
        <div
          key={i}
          className="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </section>
  );
}

function renderSmallImages(images: string[], title: string) {
  return (
    <section className="container mx-auto px-4 mt-[10rem] flex flex-col justify-start items-center gap-16">
      {images[0] && (
        <div className="flex items-start justify-start w-full min-h-[50vh]">
          <Image
            src={images[0]}
            width={700}
            height={700}
            alt={`${title}`}
            className="object-contain pointer-events-none"
          />
        </div>
      )}
      {images[1] && (
        <div className="flex items-end justify-end w-full min-h-[50vh]">
          <Image
            src={images[1]}
            width={700}
            height={700}
            alt={`${title}`}
            className="object-contain pointer-events-none"
          />
        </div>
      )}
    </section>
  );
}

function renderCallToAction(nextText: string, currentProject: string) {
  const [firstWord, secondWord] = nextText.split(" ");

  return (
    <section className="min-h-[calc(8vh)] lg:min-h-[calc(50vh)] mt-[10rem] flex flex-col items-center justify-center">
      <DrawCircleText
        firstWord={firstWord}
        secondWord={secondWord}
        textSize="lg"
      />
      <Projects currentProject={currentProject} />
    </section>
  );
}
