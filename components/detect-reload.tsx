"use client";

import { useEffect } from "react";

export function DetectReload() {
  useEffect(() => {
    // Se chegou aqui, significa que houve um reload/primeiro carregamento
    sessionStorage.setItem("AcessouPeloRecarregamento", "true");
    sessionStorage.setItem("AcessouPeloFlipLink", "false");
  }, []);

  return null;
}
