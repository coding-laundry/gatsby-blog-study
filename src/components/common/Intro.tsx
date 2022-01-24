import {
  Box,
  Container,
  Divider,
  Grow,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const IntroBox = styled(Box)`
  text-align: center;
  padding: 48px 0;
`;

const Title = styled(Typography)`
  font-weight: bold;
`;

const Line = styled(Divider)`
  margin: 12px auto;
  width: 50%;
`;

const Intro = () => {
  return (
    <Container>
      <Grow in={true} timeout={1500}>
        <IntroBox>
          <Typography variant="subtitle1">This is my Gatsby Blog</Typography>
          <Title variant="h3">Caesiumy's Devlog</Title>
          <Line />
        </IntroBox>
      </Grow>
    </Container>
  );
};

export default Intro;
