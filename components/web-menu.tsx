import React from "react";
import { motion } from "framer-motion";
import { GiWolfHead } from "react-icons/gi";
import { FlipLink } from "./ui/flip-link";
import { ModeToggle } from "./mode-toggle";
import { BorderNavbar } from "./border-navbar";

import { Link } from "@/i18n/navigation";
import LanguageSelectorWeb from "./language-selector-web";
import Image from "next/image";
import { TbTie } from "react-icons/tb";
import { useTheme } from "next-themes";

type NavItems = {
  NAV_ITEMS: {
    title: string;
    href: string;
  }[];
};

export const WebMenu = ({ NAV_ITEMS }: NavItems) => {
  const { theme } = useTheme();

  return (
    <div className="w-full flex flex-row items-center justify-between px-4">
      <motion.div className="flex items-center relative z-50 cursor-pointer">
        <Link href="/">
          {/* <TbTie
            className="text-[3.5rem] lg:text-[5rem] text-foreground"
            aria-label="Logo"
          /> */}

          <Image
            src={
              theme === "dark"
                ? "/images/logo.png"
                : "/images/logo-light-mode.png"
            }
            width={70}
            height={70}
            alt="Logotipo João Gabriel Silva"
          />
        </Link>
      </motion.div>
      <div className="hidden md:flex items-center gap-x-4">
        <BorderNavbar>
          {NAV_ITEMS.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                <p className="bg-foreground rounded-full h-1 w-1" />
              )}
              <FlipLink type="web" href={item.href} aria-label={item.title}>
                {`${item.title}`}
              </FlipLink>
            </React.Fragment>
          ))}
        </BorderNavbar>
      </div>

      <div className="hidden md:flex items-center gap-x-4">
        <LanguageSelectorWeb />
        <ModeToggle type="web" />
      </div>
    </div>
  );
};
