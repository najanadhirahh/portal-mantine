'use client';
import {
  Box,
  Flex,
  Stack,
  Group,
  Text,
  Title,
  Divider,
  Modal,
  Paper,
  Center,
  Button,
  TextInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from 'next/navigation';

export default function SigninPage({
  logo,
  data,
  errors,
  handleSubmit,
  handleChange,
  handleForgotPasswordClick,
  handleOpen,
  handleClose,
  openBackdrop,
  openTnc,
  openPolicy,
  isMobile, }) {

  const router = useRouter();

  return (
    <>
      {/* Outer container converted from Box */}
      <Flex
        align="center"
        justify="center"
        w={{ base: "100%", md: "1100px" }}
        bg="white"
        style={{
          overflowY: "auto",
          borderRadius: 15,
          padding: "2rem",
          // minHeight: "50vh",
          height: "550px",
          // marginTop: "8rem",
        }}
      >
        {/* Inner flex layout (logo + form) */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-around"
          w="100%"
          gap="xl"
        >
          {/* ======================== */}
          {/* Logo Section (Mantine Box) */}
          {/* ======================== */}
          <Box
            pos="relative"
            p={{ base: "sm", sm: "md", md: "lg" }}
            maw={800}
            mx="auto"
            w={{ base: 180, sm: 220, md: 250 }}
            // h={{ base: 180, sm: 220, md: 650 }}
            style={{ borderRadius: 15 }}
          >
            <Box
              component="img"
              src="../images/newLogo.png"
              alt="Logo"
              sx={(theme) => ({
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 200, // default
                height: 'auto',
                zIndex: 0,
              })}
            />
          </Box>

          {/* ======================== */}
          {/* Form Section */}
          {/* ======================== */}
          <Paper
            p="xl"
            radius="md"
            w={{ base: "100%", sm: "90%", md: "480px" }}
            bg="#39483f43"
          >
            <Title
              order={3}
              ta="center"
              mb="md"
              tt="uppercase"
              c="white"
              fw={600}
              fz="h1"
            >
              POISUM Portal
            </Title>

            <Title order={4} fw={600} fz="h3" mb="sm" c="white">
              Login
            </Title>

            {/* form placeholder */}
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack gap="md" w="100%">
                {/* Inputs, Password fields, and Buttons will be replaced next */}
                <TextInput label="Email" placeholder="you@example.com" />
                <TextInput label="Password" type="password" />
                {/* --- Keep logic placeholders here --- */}
                <Button
                  fullWidth
                  mt="md"
                  onClick={() => router.push('/dashboard')}  // ✅ navigate properly
                >
                  Sign In
                </Button>
              </Stack>

              {/* Terms and Conditions text */}
              <Box mt="sm" w={{ base: "100%", sm: "auto" }}>
                <Text fz={11} c="black">
                  By signing up to POISUM, I hereby consent to the use of my
                  personal data by Gosum Consulting Group Sdn. Bhd. in
                  accordance with the{" "}
                  <Text
                    span
                    td="underline"
                    c="black"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleOpen("tnc")}
                  >
                    Terms & Conditions
                  </Text>{" "}
                  and{" "}
                  <Text
                    span
                    td="underline"
                    c="black"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleOpen("privacy")}
                  >
                    Privacy Policy
                  </Text>
                  .
                </Text>
              </Box>
            </Box>

            {/* =============== */}
            {/* Terms Modal */}
            {/* =============== */}
            <Modal
              opened={openTnc}
              onClose={() => handleClose("tnc")}
              size="90%"
              centered
              title={
                <Title order={4} tt="uppercase">
                  POISUM’s Terms & Conditions
                </Title>
              }
              overlayProps={{
                backgroundOpacity: 0.4,
                blur: 3,
              }}
            >
              <Divider my="md" />
              {/* <Details /> */}
            </Modal>

            {/* =============== */}
            {/* Privacy Policy Modal */}
            {/* =============== */}
            <Modal
              opened={openPolicy}
              onClose={() => handleClose("privacy")}
              size="90%"
              centered
              title={
                <Title order={4} tt="uppercase">
                  POISUM’s Privacy Policy
                </Title>
              }
              overlayProps={{
                backgroundOpacity: 0.4,
                blur: 3,
              }}
            >
              <Divider my="md" />
              {/* <PrivacyPolicyModal /> */}
            </Modal>
          </Paper>
        </Flex>
      </Flex>

      {/* Backdrop remains the same */}
      {/* // <ComponentBackdrop openBackdrop={openBackdrop} /> */}
    </>
  );
}
