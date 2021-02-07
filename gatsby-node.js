const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.blogpost && node.frontmatter.blogpost === true) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(
          filter: {
              frontmatter: {
                  blogpost: {eq: true}
              }
          }
      ) {
          edges {
              node {
                  fields {
                      slug
                  }
              }
          }
      }
  }`
  );

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.jsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}