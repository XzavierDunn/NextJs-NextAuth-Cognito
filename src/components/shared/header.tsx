"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const session = useSession();

  const getButton = () => {
    if (session.status === "authenticated") {
      return (
        <Button
          color="inherit"
          variant="outlined"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign out
        </Button>
      );
    } else {
      return (
        <Button
          color="inherit"
          variant="contained"
          onClick={() => signIn("cognito")}
        >
          Sign in
        </Button>
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Header
          </Typography>
          {getButton()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
