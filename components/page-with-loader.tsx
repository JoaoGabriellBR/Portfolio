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

  const isHome = pathname === "/";
  const [shouldShowGreetings, setShouldShowGreetings] = useState(false);

  useEffect(() => {
    const navEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    const isHardNavigation =
      navEntries.length && navEntries[0].type === "navigate";

    const hasSeenGreetings = sessionStorage.getItem("seen-home-greetings");

    if (isHome && isHardNavigation && !hasSeenGreetings) {
      setShouldShowGreetings(true);
      sessionStorage.setItem("seen-home-greetings", "true");
    }
  }, [pathname]);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        requestAnimationFrame(() => {
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
          setIsLoading(false);
        });
      },
      shouldShowGreetings ? 2000 : 700
    );

    return () => clearTimeout(timeout);
  }, [pathname, shouldShowGreetings]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader text={text} showGreetings={shouldShowGreetings} />
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
}
