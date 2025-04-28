"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatedText } from "./ui/animated-text";
import Typography from "./ui/typography";
import CursorFollow from "./cursor-follow";
import { Link } from "@/i18n/navigation";
import { FaArrowRight } from "react-icons/fa";

interface FooterProps {
  page?: string;
  route?: string;
  palette?: string;
  arrowFooterColor?: string;
}

interface ModalState {
  active: boolean;
  index: number;
}

export default function Footer({
  page = "",
  route = "/",
  palette = "#dc2626",
  arrowFooterColor = "#FFFFFF",
}: FooterProps) {
  const t = useTranslations("Footer");
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <footer className="h-screen rounded-lg overflow-hidden">
      <NavigationLink
        route={route}
        page={page}
        palette={palette}
        arrowFooterColor={arrowFooterColor}
        modal={modal}
        onHover={setModal}
      />

      <AnimatedSignature text="JOÃO GABRIEL SILVA" />
    </footer>
  );
}

interface NavigationLinkProps {
  route: string;
  page: string;
  palette: string;
  arrowFooterColor: string;
  modal: ModalState;
  onHover: (modal: ModalState) => void;
}

function NavigationLink({
  route,
  page,
  palette,
  arrowFooterColor,
  modal,
  onHover,
}: NavigationLinkProps) {
  const handleMouseEnter = () => onHover({ active: true, index: 0 });
  const handleMouseLeave = () => onHover({ active: false, index: 0 });

  return (
    <div className="group h-full flex items-center justify-center">
      <Link href={route}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mt-[-7rem] text-center break-words max-w-full px-0 lg:py-12 cursor-pointer transition-all duration-500"
        >
          <Typography text={page} color="white" size="xl5" />
        </div>
      </Link>

      <CursorFollow
        modal={modal}
        classNameContainer="rounded-full group-hover:scale-90"
        className="rounded-full"
      >
        <FooterArrow palette={palette} arrowColor={arrowFooterColor} />
      </CursorFollow>
    </div>
  );
}

interface FooterArrowProps {
  palette: string;
  arrowColor: string;
}

function FooterArrow({ palette, arrowColor }: FooterArrowProps) {
  return (
    <div
      className="flex h-full w-full items-center justify-center shadow-2xl rounded-full p-4"
      style={{ backgroundColor: palette, color: arrowColor }}
    >
      <FaArrowRight className="text-7xl" />
    </div>
  );
}

function AnimatedSignature({ text }: { text: string }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 w-full hidden lg:flex justify-center pointer-events-none z-0">
        <AnimatedText text={text} className="text-[10vw] text-neutral-950" />
      </div>
    </div>
  );
}
