import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { SITE, type Locale } from "@/config/site";
import { ogLocale } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins",
  display: "swap",
});

type LayoutParams = { params: { locale: Locale } };

export function generateMetadata({ params }: LayoutParams): Metadata {
  const { locale } = params;
  return {
    metadataBase: SITE.metadataBase,
    title: {
      default: SITE.siteName,
      template: `%s | ${SITE.siteName}`,
    },
    description: SITE.defaultDescription,
    robots: { index: true, follow: true },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      // apple: "/apple-touch-icon.png",
      // other: [{ rel: "mask-icon", url: "/mask-icon.svg" }],
    },
    // manifest: "/site.webmanifest",
    openGraph: {
      siteName: SITE.siteName,
      type: "website",
      locale: ogLocale[locale],
    },
  };
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all translations to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} antialiased font-semibold`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
        <Script
          id="jsonld-global"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE.siteName,
              url: SITE.metadataBase.href,
              sameAs: [SITE.social.github, SITE.social.linkedin],
            }),
          }}
        />
      </body>
    </html>
  );
}
