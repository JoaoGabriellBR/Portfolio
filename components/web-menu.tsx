import React from "react";
import { motion } from "framer-motion";
import { GiWolfHead } from "react-icons/gi";
import { FlipLink } from "./ui/reveal-links";
import { ModeToggle } from "./mode-toggle";
import { BorderNavbar } from "./border-navbar";

import { Link } from "@/i18n/navigation";
import LanguageSelectorWeb from "./language-selector-web";

export const WebMenu = ({ NAV_ITEMS }: any) => {
  return (
    <div className="w-full flex flex-row items-center justify-between px-4">
      <motion.div className="flex items-center text-2xl relative z-50 cursor-pointer">
        <Link href="/">
          <GiWolfHead className="text-7xl text-foreground" aria-label="Logo" />
        </Link>
      </motion.div>

      <div className="hidden md:flex items-center space-x-4">
        <BorderNavbar>
          {NAV_ITEMS.map((item: any, index: number) => (
            <React.Fragment key={item.id}>
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
