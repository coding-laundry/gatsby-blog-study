import React from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import SearchResultContainer from "../../components/search/SearchResultContainer";

const SearchIndex = () => {
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
