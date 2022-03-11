import { Box, Container, ThemeProvider } from "@mui/material";
import React from "react";
import useDarkMode from "use-dark-mode";
import { useCustomTheme } from "../../hooks/useCustomTheme";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Profile from "../common/Profile";
import { ColorModeContext } from "./ThemeLayout";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // const { theme, toggleMode } = useCustomTheme();
  const darkMode = useDarkMode();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Header toggleMode={colorMode.toggleColorMode} />
      {children}

      <Container component="section">
        <Profile />
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
