'use client';

import {
  Stack,
  Text,
  Divider,
  rem,
  Collapse,
  Group,
} from '@mantine/core';
import {
  Home,
  UserCog,
  LogOut,
  Building2,
  Briefcase,
  Tags,
  Users,
  Target,
  Calendar,
  Megaphone,
  ChevronDown,
  ChevronRight,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Sidebar() {
  const pathname = usePathname();

  // only Administration is grouped
  const menuItems = [
    { label: 'Dashboard', href: '/dashboard', icon: Home },
    {
      label: 'Administration',
      collapsible: true,
      icon: Settings,
      items: [
        { label: 'User Management', href: '/user', icon: Users },
        { label: 'Department', href: '/department', icon: Building2 },
        { label: 'Job Grade', href: '/job-grade', icon: Briefcase },
        { label: 'Value Tag', href: '/value-tag', icon: Tags },
      ],
    },
    { label: 'Missions', href: '/missions', icon: Target },
    { label: 'Event', href: '/events', icon: Calendar },
    { label: 'Campaign', href: '/campaigns', icon: Megaphone },
  ];

  const bottomLinks = [
    { label: 'Account', href: '/account', icon: UserCog },
    { label: 'Logout', href: '/signin', icon: LogOut },
  ];

  // collapse state only for administration
  const [adminOpen, setAdminOpen] = useState(false);

  // auto expand if active route is under admin
  useEffect(() => {
    const isAdminRoute = 
    pathname.startsWith('/user') ||
    pathname.startsWith('/department') || 
    pathname.startsWith('/job-grade') ||
    pathname.startsWith('/value-tag');
  
    if (isAdminRoute) {
      setAdminOpen(true);
    }
  }, [pathname]);

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
      {/* MAIN LINKS */}
      <Stack gap="sm">
        {menuItems.map((menu) => {
          if (menu.collapsible) {
            const AdminIcon = menu.icon;
            return (
              <div key={menu.label}>
                <Group
                  justify="space-between"
                  onClick={() => setAdminOpen((o) => !o)}
                  style={{
                    cursor: 'pointer',
                    padding: '8px 12px',
                    borderRadius: rem(6),
                    backgroundColor: adminOpen
                      ? 'rgba(240,240,240,0.6)'
                      : 'transparent',
                  }}
                >
                  <Group gap={10}>
                    <AdminIcon size={18} />
                    <Text size="sm"  style={{ textTransform: 'uppercase', color: '#555', }}>
                      {menu.label}
                    </Text>
                  </Group>
                  {adminOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </Group>

                <Collapse in={adminOpen}>
                  <Stack gap="xs" ml="sm" mt="xs">
                    {menu.items.map((item) => {
                      const active = pathname === item.href;
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
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
                            fontSize: rem(14),
                            textTransform: 'uppercase'
                          }}
                        >
                          <Icon size={18} />
                          {item.label}
                        </Link>
                      );
                    })}
                  </Stack>
                </Collapse>
              </div>
            );
          }

          // non-collapsible single link
          const active = pathname === menu.href;
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
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
                fontSize: rem(14),
                textTransform: 'uppercase'
              }}
            >
              <Icon size={18} />
              {menu.label}
            </Link>
          );
        })}
      </Stack>

      {/* FOOTER LINKS */}
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
                  fontSize: rem(14),
                  textTransform: 'uppercase'
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