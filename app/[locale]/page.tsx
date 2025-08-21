import type { Metadata } from "next";
import Script from "next/script";
import Home from "@/components/pages/home";
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
  const meta = getLocalizedMeta(locale, "home");
  const alternates = buildAlternates(locale, "/");
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
      images: [{ url: buildOgImagePath("home", locale), alt: meta.title }],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Home />
      <Script
        id="jsonld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: SITE.metadataBase.href,
            name: SITE.siteName,
          }),
        }}
      />
    </>
  );
}
