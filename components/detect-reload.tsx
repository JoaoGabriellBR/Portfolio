"use client";

import { useEffect } from "react";

export function DetectReload() {
  useEffect(() => {
    // Detecta se houve um reload/primeiro carregamento
    sessionStorage.setItem("AcessouPeloRecarregamento", "true");
    sessionStorage.setItem("AcessouPeloFlipLink", "false");
  }, []);

  return null;
}
