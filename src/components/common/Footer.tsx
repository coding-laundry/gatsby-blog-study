import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const FooterBlock = styled.footer`
  background-color: #303740;
  color: #eeeeee;
`;

const FooterBox = styled(Box)`
  padding: 10px 0;
  text-align: center;
`;

type FooterDataQuery = {
  site: {
    siteMetadata: {
      author: string;
    };
  };
};

const Footer = () => {
  const { site } = useStaticQuery<FooterDataQuery>(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <FooterBlock>
      <Container>
        <FooterBox>
          <Typography variant="caption">
            @2022 {site.siteMetadata.author} build with Gatsby
          </Typography>
        </FooterBox>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
