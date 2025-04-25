"use client";
import { useEffect, useState, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "@/i18n/navigation";
import Preloader from "./preloader";

type PageWithLoaderProps = {
  text: any;
  children: ReactNode;
};

export default function PageWithLoader({
  text,
  children,
}: PageWithLoaderProps) {
  const pathname = usePathname();
  //   const routeName =
  //     pathname === "/" ? "Home" : pathname.replace("/", "").replace("-", " ");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(
  //     () => {
  //       setIsLoading(false);
  //       document.body.style.cursor = "default";
  //       window.scrollTo(0, 0);
  //     },
  //     sessionStorage.getItem("AcessouPeloRecarregamento") === "true"
  //       ? 2000
  //       : sessionStorage.getItem("AcessouPeloFlipLink") === "true"
  //       ? 700
  //       : 700
  //   );
  //   return () => clearTimeout(timeout);
  // }, [pathname]);

  useEffect(() => {
    const isHome = pathname === "/";
    const isReload = sessionStorage.getItem("AcessouPeloRecarregamento") === "true";
    const isFlipLink = sessionStorage.getItem("AcessouPeloFlipLink") === "true";
    const showGreetings = isHome && isReload && !isFlipLink;
  
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, showGreetings ? 2000 : 500);
  
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
