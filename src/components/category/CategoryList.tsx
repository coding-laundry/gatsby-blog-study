import { Card, CardHeader, List } from "@mui/material";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import CategoryItem from "./CategoryItem";

type CategoryListProps = {
  selectedCategory?: string;
};

type CategoryQuery = {
  allMdx: {
    group: {
      fieldValue: string;
      totalCount: number;
    }[];
  };
};

const CategoryList = ({ selectedCategory = "" }: CategoryListProps) => {
  const data = useStaticQuery<CategoryQuery>(graphql`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <Card variant="outlined">
      <Link to="/category">
        <CardHeader subheader="CATEGORY" />
      </Link>
      <List>
        {data.allMdx.group.map(({ fieldValue: categoryName, totalCount }) => (
          <CategoryItem
            key={categoryName}
            name={categoryName}
            count={totalCount}
            isSelected={selectedCategory === categoryName}
          />
        ))}
      </List>
    </Card>
  );
};

export default CategoryList;
