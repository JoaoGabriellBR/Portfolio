export const SITE = {
  siteName: "João Gabriel Silva",
  metadataBase: new URL("https://joaogabrielsilva.com.br"),
  defaultLocale: "pt",
  locales: ["pt", "en", "es", "fr", "de"] as const,
  social: {
    github: "https://github.com/JoaoGabriellBR",
    linkedin: "https://www.linkedin.com/in/joaogabriel-silva",
  },
  defaultDescription:
    "Desenvolvedor Full Stack com experiência profissional em React, Next.js, Node.js, CI/CD, DevOps e metodologias ágeis. Explore meu portfólio para ver meus projetos e conquistas.",
  defaultOgImage: "/favicon.ico",
} as const;

export type Locale = (typeof SITE)["locales"][number];
