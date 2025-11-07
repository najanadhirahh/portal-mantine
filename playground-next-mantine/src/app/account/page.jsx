import { Card, Text, Button, TextInput } from '@mantine/core';
import { Breadcrumb } from '../components/Breadcrumb';

export default function AccountPage() {
  return (
    <div>
      <Breadcrumb title={'Global Setting'} />
      <Card shadow="md" p="lg" radius="md" withBorder>
        <Text fw={600} mb={5}>
          Team Identity
        </Text>
        <TextInput
          placeholder="Enter your Team Identity"
          mb="xs"
        />
        <Text size="xs" c="dimmed" mb="md">
          This name will be used in email greetings and other communications to reflect your team's identity.
        </Text>
        <Button color="dark" radius="md">
          SAVE
        </Button>
      </Card>
    </div>
  );
}
