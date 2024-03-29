import { graphql, PageProps } from "gatsby";
import React from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import Metadata from "../../components/meta/Metadata";
import PostList from "../../components/post/PostList";
import { AllMarkdown } from "../../types/postTypes";

interface CategoryDetailPageProps {
  params: {
    frontmatter__category: string;
  };
  data: AllMarkdown;
}

const CategoryDetailPage = ({
  params,
  data,
  location,
}: CategoryDetailPageProps & PageProps) => {
  const selectedCategory = params.frontmatter__category;
  const { edges: posts } = data.allMdx;
  return (
    <>
      <Metadata title={`Category - ${selectedCategory}`} link={location.href} />
      <Layout>
        <Intro type="category" selected={selectedCategory} />
        <ContentsLayout selectedCategory={selectedCategory}>
          <PostList posts={posts} />
        </ContentsLayout>
      </Layout>
    </>
  );
};

export default CategoryDetailPage;

export const query = graphql`
  query ($frontmatter__category: String) {
    allMdx(
      filter: {
        fields: { source: { eq: "blog" } }
        frontmatter: { category: { eq: $frontmatter__category } }
      }
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
