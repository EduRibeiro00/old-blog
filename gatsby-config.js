module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-json",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
              resolve: `gatsby-remark-highlight-code`
            },
            {
              resolve: "gatsby-remark-embed-video",
              options: {
                ratio: 1.77,
                related: false,
                noIframeBorder: true,
                loadingStrategy: 'lazy',
                urlOverrides: [
                  {
                    id: "youtube",
                    embedURL: videoId =>
                      `https://www.youtube-nocookie.com/embed/${videoId}`,
                  },
                ],
                containerClass: "video-container",
              },
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eduardo Ribeiro`,
        short_name: `Eduardo Ribeiro`,
        start_url: `/`,
        background_color: `#e5e7eb`,
        theme_color: `#1E40B8`,
        display: `standalone`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                  defaultTitle: title
                  titleTemplate
                  defaultDescription: description
                  siteUrl
                  defaultImage: image
                  author
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.post_date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  enclosure: edge.node.frontmatter.cover && {
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.cover.publicURL,
                  },
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                  sort: { fields: [frontmatter___post_date], order: DESC },
                  filter: {
                      frontmatter: {
                          blogpost: {eq: true}
                      }
                  }
              ) {
                  totalCount
                  edges {
                      node {
                          id
                          frontmatter {
                              title
                              post_date(formatString: "DD MMMM, YYYY")
                              cover {
                                publicURL
                              }
                          }
                          fields {
                              slug
                          }
                          excerpt(format: PLAIN, pruneLength: 100)
                          html
                          timeToRead
                      }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Eduardo Ribeiro's Blog",
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: "Eduardo Ribeiro",
    titleTemplate: "%s · Eduardo Ribeiro",
    description: "Personal Website and Blog of Eduardo Ribeiro",
    author: "Eduardo Ribeiro",
    siteUrl: "https://eduardocribeiro.com",
    image: "/images/profile-photo.jpg"
  },
};
