"use client";

import DefaultLayout from "@/components/DefaultLayout";
import { projects } from "@/data/portfolio";
import { Button, Heading, Label, Stack, Text } from "@primer/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <DefaultLayout>
      <Stack gap="normal">
        <div>
          <Button as={Link} href="/#projetos">
            ← Voltar
          </Button>
        </div>
        <Heading as="h1">{project.title}</Heading>
        <Stack direction="horizontal" wrap="wrap" gap="condensed">
          {project.tags.map((t) => (
            <Label key={t}>{t}</Label>
          ))}
        </Stack>
        <Text>{project.details}</Text>
        <div>
          <Button
            as="a"
            variant="primary"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver repositório
          </Button>
        </div>
      </Stack>
    </DefaultLayout>
  );
}
