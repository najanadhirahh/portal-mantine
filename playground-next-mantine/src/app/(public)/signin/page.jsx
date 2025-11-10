'use client';
import { Button, TextInput, Stack } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function SigninPage() {
  const router = useRouter();

  return (
    <Stack>
      <TextInput label="Email" placeholder="you@example.com" />
      <TextInput label="Password" type="password" />
      <Button
        fullWidth
        mt="md"
        onClick={() => router.push('/dashboard')}  // ✅ navigate properly
      >
        Sign In
      </Button>    
    </Stack>
  );
}
