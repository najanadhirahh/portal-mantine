import { Card, Text, Button, TextInput } from '@mantine/core';

export default function AccountPage() {
  return (
    <div>
      <Text fw={700} size="xl" mb="md" c="#183021">
        GLOBAL SETTING
      </Text>
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
