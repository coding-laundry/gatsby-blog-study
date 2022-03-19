import { graphql, PageProps } from "gatsby";
import React, { useMemo } from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import Metadata from "../../components/meta/Metadata";
import SearchResultContainer from "../../components/search/SearchResultContainer";
import { AllMarkdown } from "../../types/postTypes";

interface SearchIndexProps {
  data: AllMarkdown;
}

const SearchIndex = ({ location, data }: PageProps & SearchIndexProps) => {
  const { search } = location;

  const queryString = useMemo(
    () => new URLSearchParams(search).get("q"),
    [search]
  );

  return (
    <>
      <Metadata
        title={queryString ? `Search - ${queryString}` : "Search"}
        link={location.href}
      />
      <Layout>
        <Intro type="Search" selected={queryString} />
        <ContentsLayout>
          <SearchResultContainer query={queryString} data={data} />
        </ContentsLayout>
      </Layout>
    </>
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
