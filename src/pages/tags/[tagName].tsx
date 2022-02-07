import React from "react";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";

type TagDetailPageProps = {
  tagName: string;
};

const TagsDetailPage = ({ tagName }: TagDetailPageProps) => {
  return (
    <Layout>
      <Intro type="tag" selected={`#${tagName}`} />
      <ContentsLayout>
        {/* TODO - Add tag filtered post list */}
        postlist
      </ContentsLayout>
    </Layout>
  );
};

export default TagsDetailPage;
