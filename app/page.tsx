"use client";

import DefaultLayout from "@/components/DefaultLayout";
import { experiences, profile, projects, skills } from "@/data/portfolio";
import { Heading, Label, Stack, Text } from "@primer/react";
import Image from "next/image";
import Link from "next/link";

const section = { scrollMarginTop: 72, padding: "32px 0" } as const;

const card = {
  display: "block",
  padding: 16,
  height: "100%",
  border: "1px solid var(--borderColor-default)",
  borderRadius: 6,
  background: "var(--bgColor-muted)",
  color: "inherit",
  textDecoration: "none",
} as const;

export default function Home() {
  return (
    <DefaultLayout>
      <section id="home" style={section}>
        <Stack gap="condensed">
          <Heading as="h1">{profile.name}</Heading>
          <Text weight="semibold">{profile.role}</Text>
          <Text>{profile.summary}</Text>
        </Stack>
      </section>

      <section id="habilidades" style={section}>
        <Heading as="h2" style={{ marginBottom: 16 }}>
          Habilidades
        </Heading>
        <Stack direction="horizontal" wrap="wrap" gap="condensed">
          {skills.map((s) => (
            <Label key={s} size="large">
              {s}
            </Label>
          ))}
        </Stack>
      </section>

      <section id="experiencias" style={section}>
        <Heading as="h2" style={{ marginBottom: 16 }}>
          Experiências
        </Heading>
        <Stack gap="normal">
          {experiences.map((e) => (
            <div key={e.company + e.period} style={card}>
              <Text weight="semibold">
                {e.role} · {e.company}
              </Text>
              <div>
                <Text size="small" style={{ color: "var(--fgColor-muted)" }}>
                  {e.period}
                </Text>
              </div>
              <Text>{e.description}</Text>
            </div>
          ))}
        </Stack>
      </section>

      <section id="projetos" style={section}>
        <Heading as="h2" style={{ marginBottom: 16 }}>
          Projetos
        </Heading>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projeto/${p.slug}`}
              style={{ ...card, overflow: "hidden" }}
            >
              <Image
                src={p.image}
                alt={`Imagem do projeto ${p.title}`}
                width={640}
                height={360}
                style={{
                  width: "calc(100% + 32px)",
                  height: "auto",
                  margin: "-16px -16px 12px",
                  display: "block",
                }}
              />
              <Heading as="h3" variant="small">
                {p.title}
              </Heading>
              <p>{p.description}</p>
              <Stack direction="horizontal" wrap="wrap" gap="condensed">
                {p.tags.map((t) => (
                  <Label key={t}>{t}</Label>
                ))}
              </Stack>
            </Link>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
