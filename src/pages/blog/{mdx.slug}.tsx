import { Divider } from "@mui/material";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import PostHead from "../../components/post/PostHead";
import UtteranceComments from "../../components/post/UtteranceComments";
import { PostNode } from "../../types/postTypes";

interface PostTemplateProps {
  data: {
    mdx: PostNode;
  };
}

const PostTemplate = ({ data }: PostTemplateProps) => {
  const { frontmatter, body, tableOfContents } = data.mdx;

  return (
    <Layout>
      <ContentsLayout tableOfContents={tableOfContents}>
        <PostHead frontmatter={frontmatter} />
        <MDXRenderer>{body}</MDXRenderer>
        <Divider />
        <UtteranceComments />
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
      tableOfContents
    }
  }
`;
