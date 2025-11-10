// app/not-found.js
'use client';

import { Container, Title, Text, Button, Stack, Group, Card } from '@mantine/core';
import { IconAlertTriangle, IconHome, IconArrowLeft, IconHammer, IconRocket } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <Container size="lg" py="xl" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <Card shadow="md" radius="lg" padding="xl" style={{ width: '100%' }}>
        <Stack align="center" gap="lg">
          <div style={{ position: 'relative' }}>
            <IconAlertTriangle size={80} color="var(--mantine-color-yellow-6)" />
          
          </div>
          
          <Title order={1} c="yellow.7" ta="center" tt={'uppercase'}>
            {'Coming Soon'}
          </Title>
          
          <Text c="dimmed" size="lg" ta="center" maw={500}>
            {'This page is still under development. Please come back again.'}
          </Text>

          <Group mt="md">
              <Button
              variant="light"
              leftSection={<IconArrowLeft size={20} />}
              onClick={() => router.back()}
              size="md"
            >
              Go Back
            </Button>
            <Button
            variant="filled"
            component={Link}
            href="/dashboard"
            leftSection={<IconHome size={20} />}
            size="md"
            >
            Back to Dashboard
            </Button>
        
          </Group>

          {/* Progress indicator */}
          <div style={{ width: '100%', maxWidth: 300, marginTop: 20 }}>
            <div style={{
              height: 6,
              backgroundColor: 'var(--mantine-color-gray-2)',
              borderRadius: 3,
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: '65%',
                backgroundColor: 'var(--mantine-color-yellow-6)',
                borderRadius: 3,
                animation: 'pulse 2s infinite'
              }} />
            </div>
            <Text size="sm" c="dimmed" ta="center" mt="xs">
              Development in progress... 65%
            </Text>
          </div>
        </Stack>
      </Card>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </Container>
  );
}