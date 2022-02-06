import React from "react";
import CategoryList from "../../components/category/CategoryList";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";

const CategoryPage = () => {
  return (
    <Layout>
      <Intro type="category" />
      <ContentsLayout>
        <CategoryList />
      </ContentsLayout>
    </Layout>
  );
};

export default CategoryPage;
