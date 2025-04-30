"use client";
import { useEffect, useState, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "@/i18n/navigation";
import Preloader from "./preloader";

type PageWithLoaderProps = {
  text: string;
  children: ReactNode;
};

export default function PageWithLoader({
  text,
  children,
}: PageWithLoaderProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isHome = pathname === "/";
    const isReload =
      sessionStorage.getItem("AcessouPeloRecarregamento") === "true";
    const isFlipLink = sessionStorage.getItem("AcessouPeloFlipLink") === "true";
    const showGreetings = isHome && isReload && !isFlipLink;

    const timeout = setTimeout(
      () => {
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
        setIsLoading(false);
      },
      showGreetings ? 1700 : 700
    );

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader text={text} />}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
}
