'use client';

import { Group, Text, Avatar, Stack, Image, Burger } from '@mantine/core';

export function HeaderBar( {opened, toggle} ) {
  return (
    <Group
      justify="space-between"
      align="center"
      pt="md"
      px="md"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Left section: Logo + Title */}
      <Group gap="xs" wrap="nowrap">
        <Avatar visibleFrom="sm" src="../images/newLogo-1.png" radius="xl" color="dark" />
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Stack gap="0">
          <Text size="lg" fw={700} style={{ textTransform: 'uppercase' }} >
            POISUM Portal
          </Text>
          <Text size="xs" fw={500} c={'dimmed'} align={'right'}>
            Version 1.1.0
          </Text>
        </Stack>
      </Group>

      {/* Right section: Welcome message */}
      <Group gap="xs" wrap="nowrap">
        <Text size="sm" fw={500} hiddenFrom="md">
          Hi, Mandy
        </Text>
        <Text size="sm" fw={500} visibleFrom="md">
          Mandy, Welcome To Poisum Portal
        </Text>
        <Avatar radius="xl" color="dark">
          P
        </Avatar>
      </Group>
    </Group>

  );
}
