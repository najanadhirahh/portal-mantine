'use client';
import { Card, Text, TextInput, Button, Stack } from '@mantine/core';

export function Breadcrumb({title}) {
  return (
    <Stack>
      <Text fw={700} size="xl" mb="md" c="#183021" style={{textTransform: 'uppercase'}}>
        {title}
      </Text>
    </Stack>
  );
}
