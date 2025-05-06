import React from "react";
import { motion } from "framer-motion";
import { FlipLink } from "./ui/flip-link";
import { ModeToggle } from "./mode-toggle";
import { BorderNavbar } from "./border-navbar";

import { Link } from "@/i18n/navigation";
import LanguageSelectorWeb from "./language-selector-web";
import { useIsMounted } from "@/hooks/useIsMounted";
import { GiSuits } from "react-icons/gi";

type NavItems = {
  NAV_ITEMS: {
    title: string;
    href: string;
  }[];
};

export const WebMenu = ({ NAV_ITEMS }: NavItems) => {
  const isMounted = useIsMounted();
  const logoSize = "text-md sm:text-md md:text-xl lg:text-xl xl:text-2xl";

  return (
    <div className="w-full relative flex items-center justify-center">
      {/* Logo + Nome */}
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="absolute left-4 top-4 lg:left-0 flex items-center z-10"
      >
        {isMounted && (
          <Link
            href="/"
            className="flex flex-row items-center gap-2 min-w-[100px]"
          >
            <GiSuits
              className={`${logoSize} text-foreground dark:text-white`}
            />
            <motion.h1 className={`tracking-wide break-words ${logoSize}`}>
              João
            </motion.h1>
          </Link>
        )}
      </motion.div>

      {/* Itens de Navegação */}
      <div className="hidden md:flex items-center gap-x-4">
        <BorderNavbar>
          {NAV_ITEMS.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                <p className="bg-foreground dark:bg-white rounded-full h-1 w-1" />
              )}
              <FlipLink type="web" href={item.href} aria-label={item.title}>
                {item.title}
              </FlipLink>
            </React.Fragment>
          ))}
        </BorderNavbar>
      </div>

      {/* Idioma + Tema */}
      <div className="absolute right-4 lg:right-0 hidden md:flex items-center gap-x-4">
        <LanguageSelectorWeb />
        <ModeToggle type="web" />
      </div>
    </div>
  );
};
