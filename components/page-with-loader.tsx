"use client";
import { useEffect, useRef, useState, ReactNode, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "@/i18n/navigation";
import Preloader from "./preloader";

type PageWithLoaderProps = {
  text: string;
  children: ReactNode;
};

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

function prefersReducedMotion(): boolean {
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function saveDataEnabled(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as NavigatorWithConnection;
  return Boolean(nav.connection?.saveData);
}

export default function PageWithLoader({
  text,
  children,
}: PageWithLoaderProps) {
  const pathname = usePathname();
  // Inicialmente oculto para não bloquear o carregamento
  const [isPreloaderVisible, setIsPreloaderVisible] = useState<boolean>(false);
  const [shouldShowGreetings, setShouldShowGreetings] =
    useState<boolean>(false);
  const isInitialMount = useRef<boolean>(true);

  // Exibe saudações ocasionais apenas na home em navegação "dura" e respeita preferências
  useEffect(() => {
    const isHome = pathname === "/";
    const navEntries = performance.getEntriesByType("navigation");
    const isHardNavigation =
      navEntries.length > 0 &&
      (navEntries[0] as PerformanceNavigationTiming).type === "navigate";

    const GREETING_TIMEOUT_MINUTES = 30;
    const lastShown = sessionStorage.getItem("last-home-greeting");
    const now = Date.now();
    const hasExpired =
      !lastShown ||
      now - parseInt(lastShown, 10) > GREETING_TIMEOUT_MINUTES * 60 * 1000;

    const prefersReduced = prefersReducedMotion();
    const saveData = saveDataEnabled();

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
    const t = setTimeout(() => setIsPreloaderVisible(false), 350);
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
