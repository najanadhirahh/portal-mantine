'use client';
import { BackgroundImage, Box, Container, Grid, Image, Paper, Stack, Title } from '@mantine/core';

export default function PublicLayout({ children }) {
  return (
    <Box mx="auto">
      <BackgroundImage
        src="images/bg1.png"
        alt="Background"
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          display: 'flex',               // ✅ Make BackgroundImage a flex container
          alignItems: 'center',          // ✅ Vertical centering
          justifyContent: 'center',      // ✅ Horizontal centering
        }}
      >
        <Container
          style={{
            maxWidth: '1100px',
          }}
        >
          {children}
        </Container>
      </BackgroundImage>
    </Box>

  );
}
