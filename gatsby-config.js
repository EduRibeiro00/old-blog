module.exports = {
  siteMetadata: {
    title: "Personal Blog",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
};
