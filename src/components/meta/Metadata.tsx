import React from "react";
import { Helmet } from "react-helmet";

const DEFAULT_DESCRIPTION =
  "This is Caesiumy's Devlog for publishing some posts about development especially techs related with frontend, javascript, typescript, react, gatsby, next";

const DEFAULT_THUMBNAIL =
  "https://github.com/coding-laundry/gatsby-blog-study/blob/main/static/icon.png?raw=true";
interface MetadataProps {
  title?: string;
  link: string;
  thumbnail?: string;
}

const Metadata = ({ title, link, thumbnail }: MetadataProps) => {
  return (
    <Helmet>
      <title>
        {title ? `${title} | Caesiumy's Devlog` : "Caesiumy's Devlog"}
      </title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <link rel="canonical" href={link} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION}></meta>
      <meta property="og:url" content={link} />
      <meta property="og:image" content={thumbnail ?? DEFAULT_THUMBNAIL} />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Helmet>
  );
};

export default Metadata;
