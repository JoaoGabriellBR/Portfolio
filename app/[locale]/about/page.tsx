import type { Metadata } from "next";
import Script from "next/script";
import About from "@/components/pages/about";
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
  const meta = getLocalizedMeta(locale, "about");
  const alternates = buildAlternates(locale, "/about");
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
      images: [{ url: buildOgImagePath("about", locale), alt: meta.title }],
    },
  };
}

export default function AboutPage({ params }: PageProps) {
  const { locale } = params;
  const meta = getLocalizedMeta(locale, "about");
  const home = buildAlternates(locale, "/").canonical;
  const url = buildAlternates(locale, "/about").canonical;
  return (
    <>
      <About />
      <Script
        id="jsonld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: SITE.siteName,
                item: home,
              },
              { "@type": "ListItem", position: 2, name: meta.title, item: url },
            ],
          }),
        }}
      />
    </>
  );
}
