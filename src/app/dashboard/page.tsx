import { Container, Stack } from "@mui/material";

export default function Dashboard() {
  return (
    <Container sx={{ marginTop: "2em" }} maxWidth="sm">
      <Stack alignItems="center" spacing={2}>
        <h1>Dashboard</h1>
      </Stack>
    </Container>
  );
}
