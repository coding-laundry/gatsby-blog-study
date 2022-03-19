import { graphql, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import Metadata from "../../components/meta/Metadata";
import PostList from "../../components/post/PostList";
import { AllMarkdown } from "../../types/postTypes";

type TagDetailPageProps = {
  tagName: string;
  data: AllMarkdown;
};

const TagsDetailPage = ({
  tagName,
  data,
  location,
}: TagDetailPageProps & PageProps) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const filteredPosts = data.allMdx.edges.filter((post) =>
      post.node.frontmatter.tags.includes(tagName)
    );
    setPosts(filteredPosts);
  }, [tagName]);

  return (
    <>
      <Metadata title={`Tag - ${tagName}`} link={location.href} />
      <Layout>
        <Intro type="tag" selected={`#${tagName}`} />
        <ContentsLayout>
          <PostList posts={posts} />
        </ContentsLayout>
      </Layout>
    </>
  );
};

export default TagsDetailPage;

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
