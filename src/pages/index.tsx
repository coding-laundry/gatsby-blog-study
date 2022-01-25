import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import Header from "../components/common/Header";
import Intro from "../components/common/Intro";
import PostList from "../components/common/PostList";
import CategoryList from "../components/common/CategoryList";
import Profile from "../components/common/Profile";
import Footer from "../components/common/Footer";
import { graphql } from "gatsby";
import { AllMarkdown } from "../types/postTypes";

const theme = createTheme({
  typography: {
    fontFamily: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif`,
  },
});

type IndexPageProps = {
  data: AllMarkdown;
};

const IndexPage = ({ data }: IndexPageProps) => {
  const { edges: posts } = data.allMdx;
  console.log(data.allMdx.edges);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Intro />

      <main>
        <PostList posts={posts} />
        <CategoryList />
      </main>

      <Profile />
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
            tag
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
          excerpt
          id
        }
      }
    }
  }
`;
