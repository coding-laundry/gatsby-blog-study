import React from "react";
import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material";

import Header from "../components/common/Header";
import Intro from "../components/common/Intro";
import PostList from "../components/common/PostList";
import CategoryList from "../components/common/CategoryList";
import Profile from "../components/common/Profile";
import Footer from "../components/common/Footer";

const theme = createTheme({
  typography: {
    fontFamily: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif`,
  },
});

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Intro />
      <PostList />
      <CategoryList />
      <Profile />
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
