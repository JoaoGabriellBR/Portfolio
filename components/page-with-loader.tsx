"use client";
import { useEffect, useState, ReactNode, Suspense } from "react";
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
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [shouldShowGreetings, setShouldShowGreetings] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);

  // Gerencia a lógica de saudações na página inicial
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

  // Gerencia a transição do preloader e conteúdo
  useEffect(() => {
    // Inicia o carregamento do conteúdo imediatamente
    const contentLoadTimeout = setTimeout(() => {
      setIsContentReady(true);
    }, 100); // Pequeno delay para garantir que o React tenha tempo de montar o componente

    // Configura o timer para remover o preloader
    const preloaderTimeout = setTimeout(
      () => {
        requestAnimationFrame(() => {
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
          setIsPreloaderVisible(false);
        });
      },
      shouldShowGreetings ? 2000 : 700
    );

    return () => {
      clearTimeout(contentLoadTimeout);
      clearTimeout(preloaderTimeout);
    };
  }, [pathname, shouldShowGreetings]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isPreloaderVisible && (
          <Preloader text={text} showGreetings={shouldShowGreetings} />
        )}
      </AnimatePresence>

      <div
        style={{
          opacity: isPreloaderVisible ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
          visibility: isPreloaderVisible ? "hidden" : "visible",
        }}
      >
        <Suspense fallback={null}>{isContentReady && children}</Suspense>
      </div>
    </>
  );
}
