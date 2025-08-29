"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";
import { useLenis } from "lenis/react";

/**
 * Reseta a posição de scroll para o topo a cada mudança de rota.
 * faz fallback para window.scrollTo caso Lenis não esteja disponível.
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Aguarda o próximo frame para garantir que o novo conteúdo montou
    requestAnimationFrame(() => {
      try {
        if (lenis) {
          // Reseta imediatamente sem animação
          lenis.scrollTo(0, { immediate: true });
          return;
        }
      } catch {
        // no-op; usa fallback abaixo
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [pathname, lenis]);

  return null;
}

