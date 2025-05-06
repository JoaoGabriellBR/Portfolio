import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en", "es", "fr", "de"],
  defaultLocale: "pt",
});
