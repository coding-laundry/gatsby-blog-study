import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const FooterBlock = styled.footer`
  background-color: #303740;
  color: #eeeeee;
`;

const FooterBox = styled(Box)`
  padding: 10px 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Container>
        <FooterBox>
          <Typography variant="caption">
            @2022 Caesiumy build with Gatsby
          </Typography>
        </FooterBox>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
