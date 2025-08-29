export const SITE = {
  siteName: "João Gabriel Silva | Desenvolvedor de Software",
  metadataBase: new URL("https://joaogabrielsilva.com.br"),
  defaultLocale: "pt",
  locales: ["pt", "en", "es", "fr", "de"] as const,
  social: {
    github: "https://github.com/JoaoGabriellBR",
    linkedin: "https://www.linkedin.com/in/joaogabriel-silva",
  },
  defaultDescription:
    "Desenvolvedor Full Stack com experiência profissional em React, Next.js, Node.js, CI/CD, DevOps e metodologias ágeis. Explore meu portfólio para ver meus projetos e conquistas.",
  defaultOgImage:
    "https://og-image.vercel.app/Jo%C3%A3o%20Gabriel%20Silva%20%7C%20Desenvolvedor%20de%20Software?theme=bold&md=1&fontSize=75px&images=https://joaogabrielsilva.com.br/images/photo.webp",
} as const;

export type Locale = (typeof SITE)["locales"][number];

