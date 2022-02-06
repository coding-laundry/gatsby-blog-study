import React from "react";
import CategoryList from "../../components/category/CategoryList";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";

type CategoryDetailPageProps = {
  params: {
    frontmatter__category: string;
  };
};

const CategoryDetailPage = ({ params }: CategoryDetailPageProps) => {
  const selectedCategory = params.frontmatter__category;

  return (
    <Layout>
      <Intro type="category" selected={selectedCategory} />
      <ContentsLayout selectedCategory={selectedCategory}>
        {/* TODO - Add category filtered post list */}
        postlist
      </ContentsLayout>
    </Layout>
  );
};

export default CategoryDetailPage;
