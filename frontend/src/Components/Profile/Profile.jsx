import React from "react";
import {
  Center,
  Card,
  Avatar,
  Text,
  Stack,
  Group,
  Button,
} from "@mantine/core";

export default function Profile() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #d8b4fe 0%, #a5f3fc 100%)",
      }}
    >
      <Card
        shadow="xl"
        padding="xl"
        radius="lg"
        withBorder
        style={{
          maxWidth: 350,
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(12px)",
          color: "grey",
          textAlign: "center",
        }}
      >
        <Center>
          <Avatar src={null} alt="Nousheen" size={120} radius="xl" />
        </Center>

        <Stack align="center" spacing="sm" mt="md">
          <Text size="xl" fw={800} c="gray.8" style={{ fontFamily: "cursive" }}>
            Nousheen
          </Text>
          <Text size="sm" fw={500} c="gray.6" style={{ fontFamily: "monospace" }}>
            nousheen0116@gmail.com
          </Text>
        </Stack>

        <Group justify="center" mt="lg" gap="md">
          <Button
            variant="gradient"
            gradient={{ from: "violet", to: "cyan" }}
            radius="md"
          >
            Edit Profile
          </Button>
          <Button
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            radius="md"
          >
            Logout
          </Button>
        </Group>
      </Card>
    </div>
  );
}