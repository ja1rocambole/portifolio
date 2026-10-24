import { Header, PageLayout } from "@primer/react";
import Link from "next/link";
import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header>
        <Header.Item>
          <Header.Link as={Link} href="/">
            Portfólio
          </Header.Link>
        </Header.Item>
        <Header.Item>
          <Header.Link as={Link} href="/projeto">
            Projetos
          </Header.Link>
        </Header.Item>
      </Header>

      <PageLayout>
        <PageLayout.Content>{children}</PageLayout.Content>
      </PageLayout>
    </>
  );
}
