import { Box, Container, ThemeProvider } from "@mui/material";
import React from "react";
import { useCustomTheme } from "../../hooks/useCustomTheme";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Profile from "../common/Profile";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const theme = useCustomTheme("dark");

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Header />
        {children}

        <Container component="section">
          <Profile />
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
