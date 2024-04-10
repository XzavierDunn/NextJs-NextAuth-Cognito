"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useRouter } from "next/navigation";
import { SessionContextValue, signIn, useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const session: SessionContextValue = useSession();

  if (session.status === "unauthenticated") {
    return (
      <Container sx={{ marginTop: "2em" }} maxWidth="sm">
        <Stack alignItems="center" spacing={2}>
          <h1>You are not logged in</h1>
          <Button onClick={() => signIn("cognito")} variant="contained">
            Sign in
          </Button>
        </Stack>
      </Container>
    );
  } else {
    router.push("/dashboard");
  }
}
