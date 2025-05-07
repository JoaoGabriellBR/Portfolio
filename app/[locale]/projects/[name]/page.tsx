import { notFound } from "next/navigation";
import ProjectDetails from "@/components/project-details";
import myProjects, { ProjectName } from "@/data/projects";

type ProjectPageProps = {
  params: { locale: string; name: ProjectName };
};

export const dynamicParams = false;

export default function ProjectPage({ params }: ProjectPageProps) {
  const { name } = params;
  const project = myProjects[name];

  if (!project) return notFound();

  return <ProjectDetails project={project} currentProject={name} />;
}

export async function generateStaticParams() {
  const locales = ["pt", "en", "es", "fr", "de"];
  const projectNames = Object.keys(myProjects) as ProjectName[];

  return locales.flatMap((locale) =>
    projectNames.map((name) => ({ locale, name }))
  );
}
