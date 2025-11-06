'use client';

import { Stack, Group, Text, Divider, rem } from '@mantine/core';
import { Home, UserCog, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Account', href: '/account', icon: UserCog },
  ];

  const bottomLinks = [{ label: 'Logout', href: '/logout', icon: LogOut }];

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <div>
        <Stack gap="xs" padding='25px'>
          {links.map((link) => {
            const active = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 12px',
                  borderRadius: rem(6),
                  textDecoration: 'none',
                  color: active ? '#183021' : '#555',
                  background: active ? '#eff2d9' : 'transparent',
                  fontWeight: active ? 600 : 400,
                  transition: '0.2s',
                }}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </Stack>
      </div>

      <div>
        <Divider my="sm" />
        <Stack gap="xs">
          {bottomLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 12px',
                  borderRadius: rem(6),
                  textDecoration: 'none',
                  color: '#555',
                }}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </Stack>
      </div>
    </div>
  );
}
