import { IGatsbyImageData } from "gatsby-plugin-image";

export type AllMarkdown = {
  allMdx: {
    edges: { node: PostNode }[];
  };
};

export type PostNode = {
  frontmatter: PostFrontmatter;
  id: string;
  slug: string;
  excerpt?: string;
  body?: string;
  tableOfContents?: {
    items: TableItem[];
  };
};

export type PostFrontmatter = {
  title: string;
  tags: string[];
  date: string;
  category: string;
  thumbnail: GatsbyThumbnail;
};

export type GatsbyThumbnail = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  publicURL?: string;
};

export type TableItem = {
  url: string;
  title: string;
  items: TableItem[];
};
