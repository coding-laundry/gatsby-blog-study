import React from "react";
import { createTheme, Grid, ThemeProvider } from "@mui/material";

import Header from "../components/common/Header";
import Intro from "../components/common/Intro";
import PostList from "../components/post/PostList";
import CategoryList from "../components/category/CategoryList";
import Profile from "../components/common/Profile";
import Footer from "../components/common/Footer";
import { graphql } from "gatsby";
import { AllMarkdown } from "../types/postTypes";
import { Container } from "@mui/material";
import styled from "@emotion/styled";

const theme = createTheme({
  typography: {
    fontFamily: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif`,
  },
});

const HiddenGrid = styled(Grid)`
  @media (max-width: 600px) {
    display: none;
  }
`;

type IndexPageProps = {
  data: AllMarkdown;
};

const IndexPage = ({ data }: IndexPageProps) => {
  const { edges: posts } = data.allMdx;

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Intro />

      <Container>
        <Grid container spacing={2}>
          <Grid item sm={9}>
            <PostList posts={posts} />
          </Grid>
          <HiddenGrid item sm={3}>
            <CategoryList />
          </HiddenGrid>
        </Grid>
      </Container>

      <Container>
        <Profile />
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            category
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
          slug
          excerpt(pruneLength: 64)
          id
        }
      }
    }
  }
`;
