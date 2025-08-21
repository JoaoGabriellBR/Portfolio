import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import ProjectDetails from "@/components/project-details";
import myProjects, { ProjectName } from "@/data/projects";
import { getTranslations } from "next-intl/server";
import { SITE, type Locale } from "@/config/site";
import {
  buildAlternates,
  buildCanonical,
  ogLocale,
} from "@/lib/seo";
import type { ProjectData } from "@/components/project-details";

type ProjectPageProps = {
  params: { locale: Locale; name: ProjectName };
};

export const dynamicParams = false;

export default function ProjectPage({ params }: ProjectPageProps) {
  const { locale, name } = params;
  const project: ProjectData = myProjects[name];
  if (!project) return notFound();

  const home = buildCanonical(locale, "/projects");
  const url = buildCanonical(locale, `/projects/${name}`);
  const imageUrl = project.fullImage ?? project.desktopImages;

  return (
    <>
      <ProjectDetails project={project} currentProject={name} />
      <Script
        id="jsonld-project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: SITE.siteName, item: home },
                { "@type": "ListItem", position: 2, name: project.title, item: url },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: project.title,
              author: { "@type": "Person", name: SITE.siteName },
              image: new URL(String(imageUrl), SITE.metadataBase).toString(),
              inLanguage: locale,
            },
          ]),
        }}
      />
    </>
  );
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, name } = params;
  const project: ProjectData = myProjects[name];
  if (!project) {
    return {
      title: "Projeto não encontrado",
      description: "",
      robots: { index: false, follow: false },
    };
  }
  const t = await getTranslations({ locale });
  const description = t(project.descriptionKey);
  const title = `${project.title} — ${SITE.siteName}`;
  const alternates = buildAlternates(locale, `/projects/${name}`);
  const url = alternates.canonical;
  const imageUrl = project.fullImage ?? project.desktopImages;
  return {
    title,
    description,
    keywords: [project.title.toLowerCase(), "project", "portfolio"],
    alternates,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.siteName,
      type: "article",
      locale: ogLocale[locale],
      images: [
        {
          url: new URL(String(imageUrl), SITE.metadataBase).toString(),
          alt: project.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const locales: Locale[] = ["pt", "en", "es", "fr", "de"];
  const projectNames = Object.keys(myProjects) as ProjectName[];
  return locales.flatMap((locale) =>
    projectNames.map((name) => ({ locale, name }))
  );
}
