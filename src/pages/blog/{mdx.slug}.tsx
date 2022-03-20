import { Divider } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import Metadata from "../../components/meta/Metadata";
import PostHead from "../../components/post/PostHead";
import UtteranceComments from "../../components/post/UtteranceComments";
import { PostNode } from "../../types/postTypes";

interface PostTemplateProps {
  data: {
    mdx: PostNode;
  };
}

const PostTemplate = ({ data, location }: PostTemplateProps & PageProps) => {
  const { frontmatter, body, tableOfContents } = data.mdx;

  return (
    <>
      <Metadata
        title={`${frontmatter.title} | Caesiumy's Devlog'`}
        link={location.href}
        thumbnail={location.origin + frontmatter.thumbnail?.publicURL}
      />
      <Layout>
        <ContentsLayout tableOfContents={tableOfContents}>
          <PostHead frontmatter={frontmatter} />
          <MDXRenderer>{body}</MDXRenderer>
          <Divider />
          <UtteranceComments />
        </ContentsLayout>
      </Layout>
    </>
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
          publicURL
        }
      }
      body
      slug
      tableOfContents
    }
  }
`;
