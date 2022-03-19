import { PageProps } from "gatsby";
import React from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import TagList from "../../components/tag/TagList";
import Metadata from "../../components/meta/Metadata";

const TagsPageIndex = ({ location }: PageProps) => {
  return (
    <>
      <Metadata title="All Tags" link={location.href} />
      <Layout>
        <Intro type="#tags" />
        <ContentsLayout>
          <TagList />
        </ContentsLayout>
      </Layout>
    </>
  );
};

export default TagsPageIndex;
