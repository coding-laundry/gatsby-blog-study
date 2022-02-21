import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import { PostNode } from "../../types/postTypes";

interface PostTemplateProps {
  data: {
    mdx: PostNode;
  };
}

const PostTemplate = ({ data }: PostTemplateProps) => {
  const { frontmatter, body } = data.mdx;
  const { title, date, category, tags, thumbnail } = frontmatter;

  return (
    <Layout>
      <ContentsLayout>
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
            gatsbyImageData
          }
        }
      }
      body
      slug
    }
  }
`;
