"use client";

import DefaultLayout from "@/components/DefaultLayout";
import { Button, Heading, Stack } from "@primer/react";

export default function Home() {
  return (
    <DefaultLayout>
      <Stack align={"center"}>
        <Heading>Portifolio</Heading>
        <Button variant="primary">Botão</Button>
      </Stack>
    </DefaultLayout>
  );
}
