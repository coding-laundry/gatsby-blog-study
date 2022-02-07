import styled from "@emotion/styled";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import TagItem from "./TagItem";
import { PostFrontmatter } from "../../types/postTypes";

const TagWrapper = styled(Box)`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

type TagListQuery = {
  allMdx: {
    nodes: {
      frontmatter: Pick<PostFrontmatter, "tags">;
    }[];
  };
};

type TagListProps = {
  limit?: number;
};

const TagList = ({ limit = Infinity }: TagListProps) => {
  const data = useStaticQuery<TagListQuery>(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `);

  const tags = useMemo(
    () =>
      data.allMdx.nodes.reduce((acc, cur) => {
        const { tags } = cur.frontmatter;
        tags.forEach((tag) => {
          acc.add(tag);
        });
        return acc;
      }, new Set<string>([])),
    []
  );

  return (
    <Card variant="outlined">
      <Link to="/tags">
        <CardHeader subheader="TAGS" />
      </Link>
      <CardContent>
        <TagWrapper>
          {[...tags].slice(0, limit).map((tag) => (
            <TagItem key={tag} name={tag} />
          ))}
        </TagWrapper>
      </CardContent>
    </Card>
  );
};

export default TagList;
