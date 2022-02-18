import { PageProps } from "gatsby";
import React, { useMemo } from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import SearchResultContainer from "../../components/search/SearchResultContainer";

interface SearchIndexProps {
  location: Pick<PageProps, "location">;
}

const SearchIndex = ({ location }: PageProps) => {
  const { search } = location;

  const qs = useMemo(
    () =>
      search
        .slice(1)
        .split("&")
        .reduce((acc, cur) => {
          const [key, value] = cur.split("=");
          acc[key] = value;
          return acc;
        }, {}),
    [search]
  );

  console.log("qs :>> ", qs);

  return (
    <Layout>
      <Intro type="Search" selected={""} />
      <ContentsLayout>
        <SearchResultContainer />
      </ContentsLayout>
    </Layout>
  );
};

export default SearchIndex;
