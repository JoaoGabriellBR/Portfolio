import type { Metadata } from "next";
import Script from "next/script";
import Projects from "@/components/pages/projects";
import { SITE, type Locale } from "@/config/site";
import {
  buildAlternates,
  buildOgImagePath,
  getLocalizedMeta,
  ogLocale,
} from "@/lib/seo";

type PageProps = { params: { locale: Locale } };

export function generateMetadata({ params }: PageProps): Metadata {
  const { locale } = params;
  const meta = getLocalizedMeta(locale, "projects");
  const alternates = buildAlternates(locale, "/projects");
  const url = alternates.canonical;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: SITE.siteName,
      locale: ogLocale[locale],
      type: "website",
      images: [{ url: buildOgImagePath("projects", locale), alt: meta.title }],
    },
  };
}

export default function ProjectsPage({ params }: PageProps) {
  const { locale } = params;
  const meta = getLocalizedMeta(locale, "projects");
  const home = buildAlternates(locale, "/").canonical;
  const url = buildAlternates(locale, "/projects").canonical;
  return (
    <>
      <Projects />
      <Script
        id="jsonld-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: SITE.siteName, item: home },
              { "@type": "ListItem", position: 2, name: meta.title, item: url },
            ],
          }),
        }}
      />
    </>
  );
}
