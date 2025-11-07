'use client';
import { Container, Paper, Title } from '@mantine/core';

export default function PublicLayout({ children }) {
  return (
    <Container size="xs" my="xl">
      <Paper p="xl" radius="md" withBorder>
        <Title order={3} ta="center" mb="md">
          Poisum Portal
        </Title>
        {children}
      </Paper>
    </Container>
  );
}
