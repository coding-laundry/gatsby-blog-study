import React from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";

const SearchIndex = () => {
  return (
    <Layout>
      <Intro type="Search" selected={""} />
      <ContentsLayout>search</ContentsLayout>
    </Layout>
  );
};

export default SearchIndex;
