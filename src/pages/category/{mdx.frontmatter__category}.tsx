import { graphql } from "gatsby";
import React from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import PostList from "../../components/post/PostList";
import { AllMarkdown } from "../../types/postTypes";

type CategoryDetailPageProps = {
  params: {
    frontmatter__category: string;
  };
  data: AllMarkdown;
};

const CategoryDetailPage = ({ params, data }: CategoryDetailPageProps) => {
  const selectedCategory = params.frontmatter__category;
  const { edges: posts } = data.allMdx;
  return (
    <Layout>
      <Intro type="category" selected={selectedCategory} />
      <ContentsLayout selectedCategory={selectedCategory}>
        <PostList posts={posts} />
      </ContentsLayout>
    </Layout>
  );
};

export default CategoryDetailPage;

export const query = graphql`
  query ($frontmatter__category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $frontmatter__category } } }
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
