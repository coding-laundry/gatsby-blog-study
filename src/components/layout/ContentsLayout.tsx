import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import CategoryList from "../category/CategoryList";
import TagList from "../tag/TagList";

type ContentsLayoutProps = {
  children: React.ReactNode;
  selectedCategory?: string;
};

const ContentsLayout = ({
  children,
  selectedCategory,
}: ContentsLayoutProps) => {
  return (
    <Container component="main">
      <Grid container spacing={2} component="section">
        <Grid item sm={9} xs={12} component="article">
          {children}
        </Grid>
        <Grid item sm={3} xs={12} component="aside">
          <Stack spacing={2}>
            <CategoryList selectedCategory={selectedCategory} />
            <TagList limit={25} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentsLayout;
