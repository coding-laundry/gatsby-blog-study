import { IGatsbyImageData } from "gatsby-plugin-image";

export type GatsbyThumbnail = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  publicURL: string;
};

export type PostFrontmatter = {
  title: string;
  tag: string[];
  date: string;
  category: string;
  thumbnail: GatsbyThumbnail;
};

export type PostNode = {
  frontmatter: PostFrontmatter;
  id: string;
  slug: string;
  excerpt: string;
  body?: string;
};

export type AllMarkdown = {
  allMdx: {
    edges: { node: PostNode }[];
  };
};
