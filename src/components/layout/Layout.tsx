import { Container, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Profile from "../common/Profile";

const theme = createTheme({
  typography: {
    fontFamily: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif`,
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}

      <Container>
        <Profile />
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
