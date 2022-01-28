import { Card, CardHeader, List } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import CategoryItem from "./CategoryItem";
import { PostFrontmatter } from "../../types/postTypes";

type CategoryQuery = {
  allMdx: {
    nodes: {
      frontmatter: Pick<PostFrontmatter, "category">;
    }[];
  };
};

const CategoryList = () => {
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

  const categoryHash = data.allMdx.nodes.reduce((acc, { frontmatter }) => {
    const { category } = frontmatter;
    acc[category] ? (acc[category] += 1) : (acc[category] = 1);
    return acc;
  }, {});

  return (
    <Card variant="outlined">
      <CardHeader subheader="CATEGORY" />
      <List>
        {Object.entries(categoryHash).map(([key, value]) => (
          <CategoryItem key={key} name={key} count={value} />
        ))}
      </List>
    </Card>
  );
};

export default CategoryList;
