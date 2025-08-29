"use client";
import { useEffect, useRef, useState, ReactNode, Suspense } from "react";
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
  // Inicialmente oculto para não bloquear o carregamento
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
  const [shouldShowGreetings, setShouldShowGreetings] = useState(false);
  const isInitialMount = useRef(true);

  // Exibe saudações ocasionais apenas na home em navegação "dura" e respeita preferências
  useEffect(() => {
    const isHome = pathname === "/";
    const navEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    const isHardNavigation =
      navEntries.length > 0 && navEntries[0].type === "navigate";

    const GREETING_TIMEOUT_MINUTES = 30;
    const lastShown = sessionStorage.getItem("last-home-greeting");
    const now = Date.now();
    const hasExpired =
      !lastShown ||
      now - parseInt(lastShown, 10) > GREETING_TIMEOUT_MINUTES * 60 * 1000;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const saveData = (navigator as any)?.connection?.saveData;

    if (prefersReduced || saveData) {
      setShouldShowGreetings(false);
      setIsPreloaderVisible(false);
      return;
    }

    if (isHome && isHardNavigation && hasExpired) {
      setShouldShowGreetings(true);
      setIsPreloaderVisible(true);
      sessionStorage.setItem("last-home-greeting", now.toString());
    }
  }, [pathname]);

  // Preloader curto em trocas internas de rota (não no primeiro render)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (shouldShowGreetings) return;
    setIsPreloaderVisible(true);
    const t = setTimeout(() => setIsPreloaderVisible(false), 500);
    return () => clearTimeout(t);
  }, [pathname, shouldShowGreetings]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isPreloaderVisible && (
          <Preloader
            text={text}
            showGreetings={shouldShowGreetings}
            onFinish={() => setIsPreloaderVisible(false)}
          />
        )}
      </AnimatePresence>

      <div>
        <Suspense fallback={null}>{children}</Suspense>
      </div>
    </>
  );
}
