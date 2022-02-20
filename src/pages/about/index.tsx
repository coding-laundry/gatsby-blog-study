import { Container } from "@mui/material";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../../components/layout/Layout";

interface AboutProps {
  data: {
    mdx: {
      body: string;
    };
  };
}

const About = ({ data }: AboutProps) => {
  return (
    <Layout>
      <Container component="section">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Container>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query {
    mdx(fields: { source: { eq: "about" } }) {
      body
    }
  }
`;
