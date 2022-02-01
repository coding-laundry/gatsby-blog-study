import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import React from "react";
import CategoryList from "../category/CategoryList";

const HiddenGrid = styled(Grid)`
  @media (max-width: 600px) {
    display: none;
  }
`;

type ContentsLayoutProps = {
  children: React.ReactNode;
};

const ContentsLayout = ({ children }: ContentsLayoutProps) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={9}>
          {children}
        </Grid>
        <HiddenGrid item sm={3}>
          <CategoryList />
        </HiddenGrid>
      </Grid>
    </Container>
  );
};

export default ContentsLayout;
