const metaData = require("./gatsby-meta-config");

module.exports = {
  siteMetadata: metaData,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-mdx-source-name`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-remark-images`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-use-dark-mode",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./content/blog",
      },
      __key: "blogs",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            },
          },
        ],
      },
    },
  ],
};
