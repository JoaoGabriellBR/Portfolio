"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatedText } from "./ui/animated-text";
import Typography from "./ui/typography";
import CursorFollow from "./cursor-follow";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <footer className="h-screen rounded-lg overflow-hidden">
      <Link href="/contact">
        <div className="group h-full flex items-center justify-center">
          <div
            onMouseEnter={() => {
              setModal({ active: true, index: 0 });
            }}
            onMouseLeave={() => {
              setModal({ active: false, index: 0 });
            }}
            className="mt-[-7rem] text-center px-0 lg:py-12 cursor-pointer transition-all duration-500"
          >
            {/* <Typography
              text="Algum projeto em mente?"
              color="silver"
              size="md"
            />
            <Typography text="joaoname19@gmail.com" color="white" size="xl3" /> */}


            <Typography text="sobre mim" color="white" size="xl5" />
          </div>

          <CursorFollow
            modal={modal}
            classNameContainer="rounded-full group-hover:scale-90"
            className="rounded-full"
          >
            <div className="flex h-full w-full items-center justify-center shadow-lg text-background bg-foreground rounded-full">
              Enviar mensagem
            </div>
          </CursorFollow>
        </div>
      </Link>
      {/* Animated Text */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full hidden lg:flex justify-center pointer-events-none z-0">
          <AnimatedText
            text="JOÃO GABRIEL SILVA"
            className="text-[10vw] text-zinc-200 dark:text-neutral-700"
          />
        </div>
      </div>
    </footer>
  );
}
