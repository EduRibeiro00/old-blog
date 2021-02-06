module.exports = {
  siteMetadata: {
    title: "Eduardo Ribeiro",
    titleTemplate: "%s ~ Eduardo Ribeiro",
    description: "educribeiro's personal website and blog",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-json",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
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
        plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 590,
              },
            },
            {
            resolve: 'gatsby-remark-emojis',
            options: {
              class  : 'emoji-icon',
              escapeCharacter : '#',
              size   : 64,
              styles : {
                display      : 'inline',
                margin       : '0',
                'margin-top' : '1px',
                position     : 'relative',
                top          : '5px',
                width        : '25px'
              }
            }
          }
        ]
      }
    }
  ],
};
