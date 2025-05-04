"use client";

import { useState, useEffect } from "react";

export default function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        const matchMediaQuery = window.matchMedia("(max-width: 768px)").matches;
        const userAgentMatch =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(
            navigator.userAgent
          );

        setIsMobile(matchMediaQuery || userAgentMatch);
      };

      checkMobile(); // inicial
      window.addEventListener("resize", checkMobile); // atualizar em resize

      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, []);

  return isMobile;
}
