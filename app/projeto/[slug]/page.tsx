import { projects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectDetails";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
