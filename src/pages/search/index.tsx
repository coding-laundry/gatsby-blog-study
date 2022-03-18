import { graphql, PageProps } from "gatsby";
import React, { useMemo } from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import SearchResultContainer from "../../components/search/SearchResultContainer";
import { AllMarkdown } from "../../types/postTypes";

interface SearchIndexProps {
  data: AllMarkdown;
}

const SearchIndex = ({ location, data }: PageProps & SearchIndexProps) => {
  const { search } = location;

  const qs = useMemo(
    () =>
      search
        .slice(1)
        .split("&")
        .reduce((acc, cur) => {
          const [key, value] = cur.split("=");
          acc[key] = decodeURIComponent(value);
          return acc;
        }, {}),
    [search]
  );

  return (
    <Layout>
      <Intro type="Search" selected={qs["q"]} />
      <ContentsLayout>
        <SearchResultContainer query={qs["q"]} data={data} />
      </ContentsLayout>
    </Layout>
  );
};

export default SearchIndex;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
