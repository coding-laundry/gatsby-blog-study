import { PageProps } from "gatsby";
import React from "react";
import CategoryList from "../../components/category/CategoryList";
import Intro from "../../components/common/Intro";
import ContentsLayout from "../../components/layout/ContentsLayout";
import Layout from "../../components/layout/Layout";
import Metadata from "../../components/meta/Metadata";

const CategoryPage = ({ location }: PageProps) => {
  return (
    <>
      <Metadata title="All Categories" link={location.href} />
      <Layout>
        <Intro type="category" />
        <ContentsLayout>
          <CategoryList />
        </ContentsLayout>
      </Layout>
    </>
  );
};

export default CategoryPage;
