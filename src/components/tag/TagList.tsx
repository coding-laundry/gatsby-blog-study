import styled from "@emotion/styled";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import TagItem from "./TagItem";

const TagWrapper = styled(Box)`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

interface TagListProps {
  limit?: number;
}

interface TagListQuery {
  allMdx: {
    group: {
      fieldValue: string;
    }[];
  };
}

const TagList = ({ limit = Infinity }: TagListProps) => {
  const data = useStaticQuery<TagListQuery>(graphql`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  return (
    <Card variant="outlined">
      <Link to="/tags">
        <CardHeader subheader="TAGS" />
      </Link>
      <CardContent>
        <TagWrapper>
          {data.allMdx.group.slice(0, limit).map(({ fieldValue: tag }) => (
            <TagItem key={tag} name={tag} />
          ))}
        </TagWrapper>
      </CardContent>
    </Card>
  );
};

export default TagList;
