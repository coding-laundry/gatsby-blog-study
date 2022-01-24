import { Box, Container, Grow, Paper, styled, Typography } from "@mui/material";
import React from "react";

const IntroBox = styled(Box)`
  text-align: center;
  padding: 48px 0;
`;

const Title = styled(Typography)`
  font-weight: bold;
`;

const Intro = () => {
  return (
    <Container>
      <Grow in={true}>
        <Paper variant="outlined">
          <IntroBox>
            <Typography variant="subtitle1">This is my Gatsby Blog</Typography>
            <Title variant="h3">Caesiumy's Devlog</Title>
          </IntroBox>
        </Paper>
      </Grow>
    </Container>
  );
};

export default Intro;
