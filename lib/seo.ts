import { SITE, type Locale } from "@/config/site";

export type RouteKey =
  | "home"
  | "about"
  | "certifications"
  | "projects"
  | "contact";

interface LocalizedMeta {
  title: string;
  description: string;
  keywords: string[];
}

const META: Record<RouteKey, Record<Locale, LocalizedMeta>> = {
  home: {
    pt: {
      title: "João Gabriel Silva | Desenvolvedor Full Stack",
      description:
        "Portfólio de João Gabriel Silva, desenvolvedor full stack em React, Next.js e Node.js. Explore projetos, trajetória e formas de contato.",
      keywords: ["desenvolvedor", "full stack", "react", "next.js"],
    },
    en: {
      title: "João Gabriel Silva | Full Stack Developer",
      description:
        "Portfolio of João Gabriel Silva, a full stack developer focused on React, Next.js and Node.js. Discover projects, background and ways to connect.",
      keywords: ["developer", "full stack", "react", "next.js"],
    },
    es: {
      title: "João Gabriel Silva | Desarrollador Full Stack",
      description:
        "Portafolio de João Gabriel Silva, desarrollador full stack enfocado en React, Next.js y Node.js. Descubre proyectos, trayectoria y formas de contacto.",
      keywords: ["desarrollador", "full stack", "react", "next.js"],
    },
    fr: {
      title: "João Gabriel Silva | Développeur Full Stack",
      description:
        "Portfolio de João Gabriel Silva, développeur full stack spécialisé en React, Next.js et Node.js. Découvrez des projets, son parcours et comment le contacter.",
      keywords: ["développeur", "full stack", "react", "next.js"],
    },
    de: {
      title: "João Gabriel Silva | Full-Stack-Entwickler",
      description:
        "Portfolio von João Gabriel Silva, Full-Stack-Entwickler mit Fokus auf React, Next.js und Node.js. Entdecken Sie Projekte, Laufbahn und Kontaktmöglichkeiten.",
      keywords: ["entwickler", "full stack", "react", "next.js"],
    },
  },
  about: {
    pt: {
      title: "Sobre | João Gabriel Silva",
      description:
        "Conheça a trajetória de João Gabriel Silva, suas competências técnicas e experiências como desenvolvedor full stack.",
      keywords: ["sobre", "trajetória", "competências"],
    },
    en: {
      title: "About | João Gabriel Silva",
      description:
        "Discover João Gabriel Silva's background, technical skills and experience as a full stack developer.",
      keywords: ["about", "background", "skills"],
    },
    es: {
      title: "Sobre mí | João Gabriel Silva",
      description:
        "Conoce la trayectoria de João Gabriel Silva, habilidades técnicas y experiencia como desarrollador full stack.",
      keywords: ["sobre", "trayectoria", "habilidades"],
    },
    fr: {
      title: "À propos | João Gabriel Silva",
      description:
        "Découvrez le parcours, les compétences techniques et l'expérience de João Gabriel Silva en tant que développeur full stack.",
      keywords: ["profil", "parcours", "compétences"],
    },
    de: {
      title: "Über mich | João Gabriel Silva",
      description:
        "Erfahren Sie mehr über den Werdegang, technische Fähigkeiten und Erfahrungen von João Gabriel Silva als Full-Stack-Entwickler.",
      keywords: ["über", "laufbahn", "fähigkeiten"],
    },
  },
  certifications: {
    pt: {
      title: "Certificações | João Gabriel Silva",
      description:
        "Lista de certificações e cursos concluídos por João Gabriel Silva em tecnologia e desenvolvimento web.",
      keywords: ["certificações", "cursos", "web"],
    },
    en: {
      title: "Certifications | João Gabriel Silva",
      description:
        "List of certifications and courses completed by João Gabriel Silva in technology and web development.",
      keywords: ["certifications", "courses", "web"],
    },
    es: {
      title: "Certificaciones | João Gabriel Silva",
      description:
        "Listado de certificaciones y cursos completados por João Gabriel Silva en tecnología y desarrollo web.",
      keywords: ["certificaciones", "cursos", "web"],
    },
    fr: {
      title: "Certifications | João Gabriel Silva",
      description:
        "Liste des certifications et formations suivies par João Gabriel Silva en technologie et développement web.",
      keywords: ["certifications", "cours", "web"],
    },
    de: {
      title: "Zertifizierungen | João Gabriel Silva",
      description:
        "Liste der Zertifizierungen und abgeschlossenen Kurse von João Gabriel Silva in Technologie und Webentwicklung.",
      keywords: ["zertifizierungen", "kurse", "web"],
    },
  },
  projects: {
    pt: {
      title: "Projetos | João Gabriel Silva",
      description:
        "Seleção de projetos de João Gabriel Silva com foco em soluções web modernas e performance.",
      keywords: ["projetos", "web", "portfolio"],
    },
    en: {
      title: "Projects | João Gabriel Silva",
      description:
        "Selection of João Gabriel Silva's projects focusing on modern web solutions and performance.",
      keywords: ["projects", "web", "portfolio"],
    },
    es: {
      title: "Proyectos | João Gabriel Silva",
      description:
        "Selección de proyectos de João Gabriel Silva enfocados en soluciones web modernas y rendimiento.",
      keywords: ["proyectos", "web", "portafolio"],
    },
    fr: {
      title: "Projets | João Gabriel Silva",
      description:
        "Sélection de projets de João Gabriel Silva axés sur des solutions web modernes et la performance.",
      keywords: ["projets", "web", "portfolio"],
    },
    de: {
      title: "Projekte | João Gabriel Silva",
      description:
        "Auswahl von Projekten von João Gabriel Silva mit Fokus auf moderne Weblösungen und Leistung.",
      keywords: ["projekte", "web", "portfolio"],
    },
  },
  contact: {
    pt: {
      title: "Contato | João Gabriel Silva",
      description:
        "Entre em contato com João Gabriel Silva para parcerias, oportunidades de trabalho ou para falar sobre tecnologia.",
      keywords: ["contato", "email", "rede"],
    },
    en: {
      title: "Contact | João Gabriel Silva",
      description:
        "Get in touch with João Gabriel Silva for collaborations, job opportunities or to talk about technology.",
      keywords: ["contact", "email", "networking"],
    },
    es: {
      title: "Contacto | João Gabriel Silva",
      description:
        "Contacta a João Gabriel Silva para colaboraciones, oportunidades laborales o para hablar sobre tecnología.",
      keywords: ["contacto", "email", "redes"],
    },
    fr: {
      title: "Contact | João Gabriel Silva",
      description:
        "Contactez João Gabriel Silva pour des collaborations, des opportunités professionnelles ou pour parler technologie.",
      keywords: ["contact", "email", "réseaux"],
    },
    de: {
      title: "Kontakt | João Gabriel Silva",
      description:
        "Kontaktieren Sie João Gabriel Silva für Kooperationen, Jobmöglichkeiten oder einen Austausch über Technologie.",
      keywords: ["kontakt", "email", "netzwerk"],
    },
  },
} as const;

export function getLocalizedMeta(
  locale: Locale,
  route: RouteKey
): LocalizedMeta {
  return META[route][locale];
}

export function buildOgImagePath(route: RouteKey, locale: Locale): string {
  const { title } = getLocalizedMeta(locale, route);

  const base = new URL(
    `/${encodeURIComponent(title)}.png`,
    "https://og-image.vercel.app"
  );

  base.searchParams.set("theme", "light");
  base.searchParams.set("md", "0");
  base.searchParams.set("fontSize", "125px");
  base.searchParams.set(
    "images",
    new URL(SITE.defaultOgImage, SITE.metadataBase).toString()
  );
  base.searchParams.set("widths", "400");
  base.searchParams.set("heights", "400");

  return base.toString();
}

export function buildCanonical(locale: Locale, pathname: string): string {
  return new URL(`/${locale}${pathname}`, SITE.metadataBase).toString();
}

// Returns canonical and hreflang languages with BCP47 + x-default
export function buildAlternates(locale: Locale, pathname: string) {
  const canonical = buildCanonical(locale, pathname);
  const languages = Object.fromEntries(
    SITE.locales.map((l) => [
      ogLocale[l].replace("_", "-"),
      buildCanonical(l, pathname),
    ])
  ) as Record<string, string>;
  const xDefault = buildCanonical(SITE.defaultLocale, pathname);
  return { canonical, languages: { ...languages, "x-default": xDefault } };
}

export function cleanText(text: string, max: number): string {
  return text.replace(/\s+/g, " ").trim().slice(0, max);
}

export const ogLocale: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
} as const;
