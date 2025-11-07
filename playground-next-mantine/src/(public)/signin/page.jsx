'use client';
import { Button, TextInput, Stack } from '@mantine/core';

export default function SigninPage() {
  return (
    <Stack>
      <TextInput label="Email" placeholder="you@example.com" />
      <TextInput label="Password" type="password" />
      <Button fullWidth mt="md">Sign In</Button>
    </Stack>
  );
}
