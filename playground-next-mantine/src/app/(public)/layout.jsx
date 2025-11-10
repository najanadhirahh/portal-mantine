'use client';
import { BackgroundImage, Box, Container, Grid, Image, Paper, Stack, Title } from '@mantine/core';

export default function PublicLayout({ children }) {
  return (
    <Box mx="auto">
      <BackgroundImage
        src="images/bg1.png"
        alt="Background"
        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
      >
        <Stack justify="center" align="center" w={{ base: "90%", md: "100%" }} style={{ height: '100%' }}>
        <Container style={{ minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
          {children}
        </Container>
        </Stack>
      </BackgroundImage>
    </Box>

  );
}
