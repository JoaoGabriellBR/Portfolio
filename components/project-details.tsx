"use client";

import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { iconMap } from "@/utils/icons";
import { textSizes } from "@/utils/text-sizes";
import VideoMockup from "./ui/video-mockup";
import PageWithLoader from "./page-with-loader";
import { TfiArrowTopRight } from "react-icons/tfi";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Typography from "@/components/ui/typography";
import MonitorMockup from "@/components/ui/monitor-mockup";
import SmartphoneMockup from "@/components/ui/smartphone-mockup";
import Projects from "@/components/projects";
import { ScrollPage } from "@/components/scroll-page";
import { DrawCircleText } from "@/components/draw-circle-text";
import { MagneticButton } from "@/components/ui/button-magnetic";
import { SpinningText } from "./ui/spinning-text";
import { RiPokerSpadesFill } from "react-icons/ri";

type ProjectData = {
  title: string;
  descriptionKey: string;
  loadingText: string;
  icon: string;
  siteUrl: string;
  inDevelopment?: boolean;
  mockupVideo?: string;
  palette?: string;
  arrowFooterColor?: string;
  desktopImages?: string[];
  mobileImages?: string[];
  smallImages?: string[];
  fullImage?: string;
};

type ProjectDetailsProps = {
  project: ProjectData;
  currentProject: string;
};

export default function ProjectDetails({
  project,
  currentProject,
}: ProjectDetailsProps) {
  const t = useTranslations("Project.projectDetails");
  const Icon = iconMap[project.icon as keyof typeof iconMap];

  return (
    <PageWithLoader text={project.title}>
      <Header />
      <ReactLenis root options={{ lerp: 0.05 }}>
        <MainContent
          project={project}
          currentProject={currentProject}
          translation={t}
          Icon={Icon}
        />
      </ReactLenis>
      <Footer
        page={t("footer.contact")}
        route="/contact"
        palette={project.palette}
        arrowFooterColor={project.arrowFooterColor}
      />
    </PageWithLoader>
  );
}

type MainContentProps = {
  project: ProjectData;
  currentProject: string;
  translation: ReturnType<typeof useTranslations>;
  Icon: React.ElementType;
};

function MainContent({
  project,
  currentProject,
  translation,
  Icon,
}: MainContentProps) {
  return (
    <main className="flex flex-col gap-y-2 lg:gap-y-10">
      <HeroSection title={project.title} Icon={Icon} />
      <DescriptionSection
        description={translation(project.descriptionKey)}
        loadingText={translation("loadingText")}
        siteUrl={project.siteUrl}
        inDevelopment={project.inDevelopment}
        buttonText={translation("viewSite")}
      />
      {project.mockupVideo && <VideoSection videoSrc={project.mockupVideo} />}
      {project.fullImage && <FullImageSection imageSrc={project.fullImage} />}
      {project.mobileImages && (
        <MobileMockupsSection images={project.mobileImages} />
      )}
      {project.desktopImages && (
        <DesktopMockupsSection images={project.desktopImages} />
      )}
      {project.smallImages && (
        <SmallImagesSection
          images={project.smallImages}
          title={project.title}
        />
      )}
      <CallToActionSection
        nextText={translation("next")}
        palette={project.palette}
        currentProject={currentProject}
      />
    </main>
  );
}

// --- Sections ---

function HeroSection({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) {
  return (
    <section className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center pt-12 min-h-[calc(100vh-80px)]">
      <div className="flex flex-row items-center justify-between gap-4 -mt-28">
        <Icon className={`${textSizes.xl5} text-foreground dark:text-white`} />
        <Typography
          text={title}
          color="white"
          size="xl5"
          letterPadding={false}
        />
      </div>
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
        <ScrollPage sectionLink="#project-description" />
      </div>
    </section>
  );
}

function DescriptionSection({
  description,
  loadingText,
  siteUrl,
  inDevelopment,
  buttonText,
}: {
  description: string;
  loadingText: string;
  siteUrl: string;
  inDevelopment?: boolean;
  buttonText: string;
}) {
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
      {inDevelopment ? (
        <div className="relative max-w-full p-10 min-w-[15rem] min-h-[15rem] flex justify-center items-center">
          <SpinningText
            children={loadingText}
            fontSize={1}
            radius={6}
            duration={12}
            centerElement={
              <RiPokerSpadesFill
                className={`${textSizes.xl6} text-foreground dark:text-white`}
              />
            }
          />
        </div>
      ) : (
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
      )}
    </section>
  );
}

function VideoSection({ videoSrc }: { videoSrc: string }) {
  return (
    <section className="relative container mx-auto px-4 overflow-hidden">
      <VideoMockup src={videoSrc} autoPlay />
    </section>
  );
}

function FullImageSection({ imageSrc }: { imageSrc: string }) {
  return (
    <section className="w-full mx-auto px-4 min-h-[50vh] lg:min-h-screen mb-16 lg:mb-0 flex items-start justify-center">
      <MonitorMockup>
        <Image
          src={imageSrc}
          alt="Full screen mockup"
          fill
          className="rounded-[3rem] h-[90%]"
        />
      </MonitorMockup>
    </section>
  );
}

function MobileMockupsSection({ images }: { images: string[] }) {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row flex-wrap gap-16 items-center justify-center lg:justify-between">
        {images.map((src, index) => (
          <SmartphoneMockup key={index}>
            <Image
              src={src}
              alt={`Mobile mockup ${index + 1}`}
              fill
              className="rounded-[3rem] h-[90%]"
            />
          </SmartphoneMockup>
        ))}
      </div>
    </section>
  );
}

function DesktopMockupsSection({ images }: { images: string[] }) {
  return (
    <section className="w-full min-h-screen mt-32">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </section>
  );
}

function SmallImagesSection({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <section className="container mx-auto px-4 mt-40 flex flex-col items-center gap-16">
      {images.map((src, index) => (
        <div
          key={index}
          className={`flex w-full min-h-[50vh] ${
            index === 0 ? "items-start justify-start" : "items-end justify-end"
          }`}
        >
          <Image
            src={src}
            width={700}
            height={700}
            alt={`${title} small image ${index + 1}`}
            className="object-contain pointer-events-none"
          />
        </div>
      ))}
    </section>
  );
}

function CallToActionSection({
  nextText,
  palette,
  currentProject,
}: {
  nextText: string;
  palette?: string;
  currentProject: string;
}) {
  const [firstWord, secondWord] = nextText.split(" ");

  return (
    <section className="min-h-[8vh] lg:min-h-[50vh] mt-40 flex flex-col items-center justify-center">
      <DrawCircleText
        firstWord={firstWord}
        secondWord={secondWord}
        palette={palette}
        textSize="lg"
      />
      <Projects currentProject={currentProject} />
    </section>
  );
}

// function renderSmallImages(images: string[], title: string) {
//   return (
//     <section className="container mx-auto px-4 mt-[10rem] flex flex-col justify-start items-center gap-16">
//       {images[0] && (
//         <div className="flex items-start justify-start w-full min-h-[50vh]">
//           <Image
//             src={images[0]}
//             width={700}
//             height={700}
//             alt={`${title}`}
//             className="object-contain pointer-events-none"
//           />
//         </div>
//       )}
//       {images[1] && (
//         <div className="flex items-end justify-end w-full min-h-[50vh]">
//           <Image
//             src={images[1]}
//             width={700}
//             height={700}
//             alt={`${title}`}
//             className="object-contain pointer-events-none"
//           />
//         </div>
//       )}
//     </section>
//   );
// }
