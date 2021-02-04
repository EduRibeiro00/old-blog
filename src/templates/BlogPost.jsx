import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout'


const BlogPost = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <h1 className="text-center text-5xl">{post.frontmatter.title}</h1>
            <div className="mt-8 mb-4 my-5" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`