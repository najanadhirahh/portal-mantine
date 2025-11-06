'use client';

import { AppShell, Group, Burger, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Sidebar } from './Sidebar';
import { HeaderBar } from './HeaderBar';

export default function LayoutShell({ children }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <HeaderBar />
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
