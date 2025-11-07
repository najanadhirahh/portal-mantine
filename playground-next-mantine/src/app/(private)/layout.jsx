'use client';
import { AppShell } from '@mantine/core';
import { useState } from 'react';
import { HeaderBar } from '../components/HeaderBar';
import { Sidebar } from '../components/Sidebar';
import { useDisclosure } from '@mantine/hooks';

export default function PrivateLayout({ children }) {
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
          <HeaderBar opened={opened} toggle={toggle} />
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
