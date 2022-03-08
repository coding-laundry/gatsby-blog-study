import { IGatsbyImageData } from "gatsby-plugin-image";

export interface AllMarkdown {
  allMdx: {
    edges: { node: PostNode }[];
  };
}

export interface PostNode {
  frontmatter: PostFrontmatter;
  id: string;
  slug: string;
  excerpt?: string;
  body?: string;
  tableOfContents?: PostTableOfContents;
}

export interface PostFrontmatter {
  title: string;
  tags: string[];
  date: string;
  category: string;
  thumbnail: GatsbyThumbnail;
}

export interface GatsbyThumbnail {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  publicURL?: string;
}

export interface PostTableOfContents {
  items: TableItem[];
}

export interface TableItem {
  url: string;
  title: string;
  items: TableItem[];
}
