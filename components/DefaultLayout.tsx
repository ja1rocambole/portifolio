import { MarkGithubIcon } from "@primer/octicons-react";
import { Header, PageLayout, Text } from "@primer/react";
import { profile } from "@/data/portfolio";
import Link from "next/link";
import React from "react";

// O Octicons não possui ícone do LinkedIn
function LinkedinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#habilidades", label: "Habilidades" },
  { href: "/#experiencias", label: "Experiências" },
  { href: "/#projetos", label: "Projetos" },
];

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Cabeçalho em largura total; o PageLayout interno limita os itens à largura do conteúdo */}
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "block",
          padding: 0,
        }}
      >
        <PageLayout rowGap="none">
          <PageLayout.Header padding="none">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1px 0",
              }}
            >
              {links.map((l) => (
                <Header.Item key={l.href}>
                  <Header.Link as={Link} href={l.href}>
                    {l.label}
                  </Header.Link>
                </Header.Item>
              ))}
              <Header.Item full />
              <Header.Item>
                <Header.Link
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <MarkGithubIcon size={20} />
                </Header.Link>
              </Header.Item>
              <Header.Item style={{ marginRight: 0 }}>
                <Header.Link
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </Header.Link>
              </Header.Item>
            </div>
          </PageLayout.Header>
        </PageLayout>
      </Header>

      <PageLayout>
        <PageLayout.Content>{children}</PageLayout.Content>

        <PageLayout.Footer divider="line">
          <Text size="small" style={{ color: "var(--fgColor-muted)" }}>
            © {new Date().getFullYear()} João Fernandes. Todos os direitos
            reservados.
          </Text>
        </PageLayout.Footer>
      </PageLayout>
    </>
  );
}
