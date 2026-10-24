"use client";

import DefaultLayout from "@/components/DefaultLayout";
import { Button, Heading, Stack } from "@primer/react";

export default function Project() {
  return (
    <DefaultLayout>
      <Stack align={"center"}>
        <Heading>Projetos</Heading>
        <Button variant="primary">Botão</Button>
      </Stack>
    </DefaultLayout>
  );
}
