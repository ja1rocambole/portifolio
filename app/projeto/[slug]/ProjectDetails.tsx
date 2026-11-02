"use client";

import DefaultLayout from "@/components/DefaultLayout";
import { Button, Heading, Label, Stack, Text } from "@primer/react";
import Link from "next/link";

type Project = {
  title: string;
  tags: string[];
  details: string;
  repo: string;
};

export default function ProjectDetails({ project }: { project: Project }) {
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
          {project.tags.map((tag) => (
            <Label key={tag}>{tag}</Label>
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
