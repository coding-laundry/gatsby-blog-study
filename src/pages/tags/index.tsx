import React from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import TagList from "../../components/tag/TagList";

const TagsPageIndex = () => {
  return (
    <Layout>
      <Intro type="#tags" />
      <ContentsLayout>
        <TagList />
      </ContentsLayout>
    </Layout>
  );
};

export default TagsPageIndex;
