import {
  Box,
  Container,
  Divider,
  Grow,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const IntroBox = styled(Box)`
  text-align: center;
  padding: 48px 0;
  overflow: hidden;
`;

const Title = styled(Typography)`
  font-weight: bold;
`;

const Line = styled(Divider)`
  margin: 12px auto;
  width: 50%;
`;

interface IntroProps {
  type?: string;
  selected?: string;
}

const Intro = ({ type, selected }: IntroProps) => {
  return (
    <Container component="section">
      <Grow in={true} timeout={1500}>
        <IntroBox>
          <Typography variant="subtitle1">
            {type ? "Search Result" : "This is my Gatsby Blog"}
          </Typography>
          <Title variant="h3">
            {type
              ? selected
                ? `${type.toUpperCase()} - "${selected.toUpperCase()}"`
                : `${type.toUpperCase()}`
              : "Caesiumy's Devlog"}
          </Title>
          <Line />
        </IntroBox>
      </Grow>
    </Container>
  );
};

export default Intro;
