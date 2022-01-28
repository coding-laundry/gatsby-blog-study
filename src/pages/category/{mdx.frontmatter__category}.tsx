import React from "react";
import CategoryList from "../../components/category/CategoryList";

type CategoryDetailPageProps = {
  params: {
    frontmatter__category: string;
  };
};

const CategoryDetailPage = ({ params }: CategoryDetailPageProps) => {
  return <CategoryList currentCategory={params.frontmatter__category} />;
};

export default CategoryDetailPage;
