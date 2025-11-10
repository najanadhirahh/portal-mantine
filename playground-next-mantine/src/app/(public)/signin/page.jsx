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
  PasswordInput,
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
        display="flex"
        align="center"
        justify="center"
        w={{ base: "100%", md: "1100px" }}
        bg="white"
        style={{
          overflowY: "auto",
          borderRadius: 15,
          padding: "2rem",
          height: "650px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Inner flex layout (logo + form) */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-around"
          w="100%"
          gap="xl"
          px={{base: "1rem", md:"5rem"}}
        >
          {/* ======================== */}
          {/* Logo Section (Mantine Box) */}
          {/* ======================== */}
          <Box
            pos="relative"
            p={{ base: "sm", sm: "md", md: "lg" }}
            mx="auto"
            maw={{ base: 300, sm: 350, md: 400 }}
            w={{ base: 120, sm: 160, md: 200, lg: 250 }}
            style={{ borderRadius: 15 }}
          >
            <Box
              component="img"
              src="../images/newLogo.png"
              alt="Logo"
              w={{ base: 120, sm: 160, md: 200, lg: 250 }}
              sx={(theme) => ({
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: 'auto',
                zIndex: 0,
              })}
            />
          </Box>

          {/* ======================== */}
          {/* Form Section */}
          {/* ======================== */}
          <Paper
            px="xl"
            py="xl"
            radius="md"
            w={{ base: "100%", sm: "90%", md: "380px" }}
            bg="#39483f43"
          >
            <Title
              order={3}
              ta="center"
              mb="md"
              tt="uppercase"
              c="white"
              fw={600}
              fz="h3"
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
                <TextInput
                  size="md"
                  radius="md"
                  label="Email"
                  withAsterisk
                  placeholder="your@email.com"
                  c="white"
                // key={form.key('email')}
                // {...form.getInputProps('email')}
                />
                <PasswordInput
                  size="md"
                  radius="md"
                  label="Password"
                  withAsterisk
                  // error="Please insert your password"
                  placeholder="Enter your password"
                  c="white"
                />
                {/* --- Keep logic placeholders here --- */}
                <Button
                  fullWidth
                  tt="uppercase"
                  mt="md"
                  size="md"
                  radius="sm"
                  bg="#39493F"
                  c="white"
                  bd="#39493F"
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
                    fz={11}
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
                    fz={11}
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
