import React from "react";
import { motion } from "framer-motion";
import { FlipLink } from "./ui/flip-link";
import { ModeToggle } from "./mode-toggle";
import { BorderNavbar } from "./border-navbar";

import { Link } from "@/i18n/navigation";
import LanguageSelectorWeb from "./language-selector-web";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/useIsMounted";

type NavItems = {
  NAV_ITEMS: {
    title: string;
    href: string;
  }[];
};

export const WebMenu = ({ NAV_ITEMS }: NavItems) => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <div className="w-full flex flex-row items-center justify-between px-4">
      <motion.div className="flex items-center relative z-10 cursor-pointer pt-4 lg:pt-0">
        {isMounted && (
          <Link href="/">
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
        )}
      </motion.div>
      <div className="hidden md:flex items-center gap-x-4">
        <BorderNavbar>
          {NAV_ITEMS.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                <p className="bg-foreground dark:bg-white rounded-full h-1 w-1" />
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
