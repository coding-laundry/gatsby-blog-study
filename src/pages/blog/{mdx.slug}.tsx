import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import PostHead from "../../components/post/PostHead";
import { PostNode } from "../../types/postTypes";

interface PostTemplateProps {
  data: {
    mdx: PostNode;
  };
}

const PostTemplate = ({ data }: PostTemplateProps) => {
  const { frontmatter, body } = data.mdx;

  return (
    <Layout>
      <ContentsLayout>
        <PostHead frontmatter={frontmatter} />
        <MDXRenderer>{body}</MDXRenderer>
      </ContentsLayout>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query ($id: String) {
    mdx(fields: { source: { eq: "blog" } }, id: { eq: $id }) {
      id
      frontmatter {
        category
        date
        tags
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 512)
          }
        }
      }
      body
      slug
    }
  }
`;
