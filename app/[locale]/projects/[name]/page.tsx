import { notFound } from "next/navigation";
import ProjectDetails from "@/components/project-details";
import myProjects, { ProjectName } from "@/data/projects";
import PageWithLoader from "@/components/page-with-loader";

type ProjectPageProps = {
  params: { name: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { name } = params;
  const project = myProjects[name as ProjectName];

  if (!project) return notFound();

  return (
    <PageWithLoader text={project.name}>
      <ProjectDetails project={project} currentProject={name} />;
    </PageWithLoader>
  );
}

// 👇 Código para gerar rotas estáticas
export async function generateStaticParams() {
  return Object.keys(myProjects).map((name) => ({ name }));
}
