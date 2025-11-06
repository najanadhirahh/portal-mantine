'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="subtle"
      color={colorScheme === 'dark' ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </ActionIcon>
  );
}
