'use client';
import { Card, Text, TextInput, Button, Stack } from '@mantine/core';

export function ContentCard() {
  return (
    <Stack>
      <Text  fw={700} size="xl" mb="md" c="#183021">
        Homepage
      </Text>
      {/* <Button color="dark" align="right">Edit Profile</Button> */}
    </Stack>
  );
}
