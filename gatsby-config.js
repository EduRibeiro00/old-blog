module.exports = {
  siteMetadata: {
    title: "Eduardo Ribeiro",
    titleTemplate: "%s ~ Eduardo Ribeiro",
    description: "educribeiro's personal website and blog",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/src/articles/`,
      },
      // options: {
      //   name: "article_images",
      //   path: `${__dirname}/src/articles/images/`,
      // }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,

        // In your gatsby-transformer-remark plugin array
        plugins: [{
          resolve: 'gatsby-remark-emojis',
          options: {
            // Deactivate the plugin globally (default: true)
            active : true,
            // Add a custom css class
            class  : 'emoji-icon',
            // In order to avoid pattern mismatch you can specify
            // an escape character which will be prepended to the
            // actual pattern (e.g. `#:poop:`).
            escapeCharacter : '#', // (default: '')
            // Select the size (available size: 16, 24, 32, 64)
            size   : 64,
            // Add custom styles
            styles : {
              display      : 'inline',
              margin       : '0',
              'margin-top' : '1px',
              position     : 'relative',
              top          : '5px',
              width        : '25px'
            }
          }
        }]
      }
    }
  ],
};
