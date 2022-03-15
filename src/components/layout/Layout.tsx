import { Box, Container } from "@mui/material";
import React from "react";
import useDarkMode from "use-dark-mode";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Profile from "../common/Profile";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const darkMode = useDarkMode();

  return (
    <Box>
      <Header toggleMode={() => darkMode.toggle()} />
      {children}

      <Container component="section">
        <Profile />
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
