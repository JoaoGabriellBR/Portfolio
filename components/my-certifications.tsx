"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";

import Typography from "./ui/typography";
import CursorFollow from "./cursor-follow";
import useDeviceType from "@/hooks/use-device-type";

interface Certification {
  description: string;
  image: string;
  type: string;
}

interface ModalState {
  active: boolean;
  index: number;
}

export default function MyCertifications() {
  const t = useTranslations("Certifications");
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  const certifications: Certification[] = getCertifications(t);

  return (
    <section className="flex flex-col items-center justify-center w-full place-self-end">
      <RenderCertificationsList
        certifications={certifications}
        onHover={setModal}
      />

      <CursorFollow
        modal={modal}
        classNameContainer="h-[8rem] sm:h-[8rem] md:h-[19rem] lg:h-[25rem] w-[8rem] sm:w-[8rem] md:w-[22rem] lg:w-[30rem]"
      >
        {certifications.map((cert, idx) => (
          <CertificationImage
            key={`modal_${idx}`}
            image={cert.image}
            description={cert.description}
          />
        ))}
      </CursorFollow>
    </section>
  );
}

function getCertifications(
  t: ReturnType<typeof useTranslations>
): Certification[] {
  return [
    {
      description: t("cybersecurity.description"),
      image: "introduction-to-cybersecurity.png",
      type: "2025",
    },
    {
      description: t("machineLearning.description"),
      image: "aws-machine-learning.png",
      type: "2024",
    },
    {
      description: t("cloudFoundations.description"),
      image: "aws-cloud-foundations.png",
      type: "2024",
    },
    {
      description: t("webDevelopment.description"),
      image: "web-developer.png",
      type: "2023",
    },
  ];
}

function RenderCertificationsList({
  certifications,
  onHover,
}: {
  certifications: Certification[];
  onHover: (modal: ModalState) => void;
}) {
  return certifications.map((cert, index) => (
    <CertificationItem
      key={`cert_${index}`}
      certification={cert}
      index={index}
      onHover={onHover}
    />
  ));
}

function CertificationItem({
  certification,
  index,
  onHover,
}: {
  certification: Certification;
  index: number;
  onHover: (modal: ModalState) => void;
}) {
  const { isMobile } = useDeviceType();
  const handleMouseEnter = () => onHover({ active: true, index });
  const handleMouseLeave = () => onHover({ active: false, index });

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col lg:flex-row w-full justify-start lg:justify-between items-start lg:items-center gap-4 py-12 border-t border-neutral-800 cursor-pointer last:border-b hover:opacity-40 lg:hover:ml-12 transition-all duration-500"
    >
      {isMobile && (
        <Image
          src={`/images/${certification.image}`}
          width={600}
          height={600}
          className="object-contain"
          alt={certification.description}
        />
      )}
      <div className="flex flex-row items-center gap-4 group">
        <div className="relative flex items-center transition-all duration-300 lg:group-hover:pl-2">
          <FaArrowRight className="hidden lg:block absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-x-10 text-foreground size-5 sm:size-5 md:size-5 lg:size-6 xl:size-7" />
          <Typography
            text={certification.description}
            color="white"
            size="xl"
            letterPadding={false}
          />
        </div>
      </div>

      <Typography
        text={certification.type}
        size="sm"
        className="font-normal"
        letterPadding={false}
      />
    </div>
  );
}

function CertificationImage({
  image,
  description,
}: {
  image: string;
  description: string;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-transparent">
      <Image
        src={`/images/${image}`}
        width={600}
        height={600}
        alt={description}
        className="object-contain"
      />
    </div>
  );
}
