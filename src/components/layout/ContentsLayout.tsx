import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import { PostNode } from "../../types/postTypes";
import CategoryList from "../category/CategoryList";
import TableOfContentsBox from "../post/TableOfContents/TableOfContentsBox";
import TagList from "../tag/TagList";

const StickyStack = styled(Stack)`
  position: sticky;
  top: 65px;
`;

type ContentsLayoutProps = {
  children: React.ReactNode;
  selectedCategory?: string;
} & Pick<PostNode, "tableOfContents">;

const ContentsLayout = ({
  children,
  selectedCategory,
  tableOfContents,
}: ContentsLayoutProps) => {
  return (
    <Container component="main">
      <Grid container spacing={2} component="section">
        <Grid item sm={9} xs={12} component="article">
          {children}
        </Grid>
        <Grid item sm={3} xs={12} component="aside">
          <StickyStack spacing={2}>
            {tableOfContents && (
              <TableOfContentsBox items={tableOfContents.items} />
            )}
            <CategoryList selectedCategory={selectedCategory} />
            <TagList limit={25} />
          </StickyStack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentsLayout;
