import React from "react";
import { graphql } from "gatsby";
import { AllMarkdown } from "../types/postTypes";
import Intro from "../components/common/Intro";
import PostList from "../components/post/PostList";
import Layout from "../components/layout/Layout";
import ContentsLayout from "../components/layout/ContentsLayout";

type IndexPageProps = {
  data: AllMarkdown;
};

const IndexPage = ({ data }: IndexPageProps) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Intro />

      <ContentsLayout>
        <PostList posts={posts} />
      </ContentsLayout>
    </Layout>
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
