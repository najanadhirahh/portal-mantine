import { Card, Text, Button } from '@mantine/core';

export default function AccountPage() {
  return (
    <Card shadow="md" p="lg" radius="md" withBorder>
      <Text fw={600} mb="sm">
        Account Page
      </Text>
      <Button color="dark">Edit Profile</Button>
    </Card>
  );
}
