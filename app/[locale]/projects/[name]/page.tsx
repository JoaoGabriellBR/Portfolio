import { notFound } from "next/navigation";
import ProjectDetails from "@/components/project-details";
import myProjects, { ProjectName } from "@/data/projects";

type ProjectPageProps = {
  params: { name: ProjectName };
};

export const dynamicParams = false; // Impede que Next.js aceite nomes não definidos em generateStaticParams

export default function ProjectPage({ params }: ProjectPageProps) {
  const { name } = params;
  const project = myProjects[name];

  if (!project) return notFound();

  return <ProjectDetails project={project} currentProject={name} />;
}

export async function generateStaticParams() {
  return Object.keys(myProjects).map((name) => ({ name }));
}
