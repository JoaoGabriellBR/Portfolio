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
    const timeout = setTimeout(
      () => {
        // Aguarda o próximo frame para garantir que o layout foi montado
        requestAnimationFrame(() => {
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
          setIsLoading(false);
        });
      },
      isHome ? 1300 : 700
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
