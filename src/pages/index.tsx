import React from "react";
import { graphql, PageProps } from "gatsby";
import { AllMarkdown } from "../types/postTypes";
import Intro from "../components/common/Intro";
import PostList from "../components/post/PostList";
import Layout from "../components/layout/Layout";
import ContentsLayout from "../components/layout/ContentsLayout";
import Metadata from "../components/meta/Metadata";

interface IndexPageProps {
  data: AllMarkdown;
}

const IndexPage = ({ data, location }: IndexPageProps & PageProps) => {
  const { edges: posts } = data.allMdx;

  return (
    <>
      <Metadata link={location.href} />
      <Layout>
        <Intro />

        <ContentsLayout>
          <PostList posts={posts} />
        </ContentsLayout>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(
      filter: { fields: { source: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
