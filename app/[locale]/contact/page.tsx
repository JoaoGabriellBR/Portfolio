import type { Metadata } from "next";
import Script from "next/script";
import Contact from "@/components/pages/contact";
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
  const meta = getLocalizedMeta(locale, "contact");
  const alternates = buildAlternates(locale, "/contact");
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
      images: [{ url: buildOgImagePath("contact", locale), alt: meta.title }],
    },
  };
}

export default function ContactPage({ params }: PageProps) {
  const { locale } = params;
  const meta = getLocalizedMeta(locale, "contact");
  const home = buildAlternates(locale, "/").canonical;
  const url = buildAlternates(locale, "/contact").canonical;
  return (
    <>
      <Contact />
      <Script
        id="jsonld-contact"
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