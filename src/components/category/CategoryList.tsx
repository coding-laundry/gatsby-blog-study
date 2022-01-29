import { Card, CardHeader, List } from "@mui/material";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import CategoryItem from "./CategoryItem";
import { PostFrontmatter } from "../../types/postTypes";

type CategoryListProps = {
  currentCategory?: string;
};

type CategoryQuery = {
  allMdx: {
    nodes: {
      frontmatter: Pick<PostFrontmatter, "category">;
    }[];
  };
};

type CategoryHashType = {
  [key: string]: number;
};

const CategoryList = ({ currentCategory = "" }: CategoryListProps) => {
  const data = useStaticQuery<CategoryQuery>(graphql`
    query Category {
      allMdx {
        nodes {
          frontmatter {
            category
          }
        }
      }
    }
  `);

  const categoryHash: CategoryHashType = data.allMdx.nodes.reduce(
    (acc, { frontmatter }) => {
      const { category } = frontmatter;
      acc[category] ? (acc[category] += 1) : (acc[category] = 1);
      return acc;
    },
    {}
  );

  return (
    <Card variant="outlined">
      <Link to="/category">
        <CardHeader subheader="CATEGORY" />
      </Link>
      <List>
        {Object.entries(categoryHash).map(([key, value]) => (
          <CategoryItem
            key={key}
            name={key}
            count={value}
            isSelected={currentCategory === key}
          />
        ))}
      </List>
    </Card>
  );
};

export default CategoryList;
