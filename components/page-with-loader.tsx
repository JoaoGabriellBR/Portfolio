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
  const [shouldShowGreetings, setShouldShowGreetings] = useState(false);

  useEffect(() => {
    const isHome = pathname === "/";
    const navEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    const isHardNavigation =
      navEntries.length && navEntries[0].type === "navigate";

    const GREETING_TIMEOUT_MINUTES = 30;
    const lastShown = sessionStorage.getItem("last-home-greeting");
    const now = Date.now();

    const hasExpired =
      !lastShown ||
      now - parseInt(lastShown, 10) > GREETING_TIMEOUT_MINUTES * 60 * 1000;

    if (isHome && isHardNavigation && hasExpired) {
      setShouldShowGreetings(true);
      sessionStorage.setItem("last-home-greeting", now.toString());
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
