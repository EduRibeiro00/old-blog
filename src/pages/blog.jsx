import React from 'react'
import { graphql } from 'gatsby'
import { FaArrowDown } from '@react-icons/all-files/fa/FaArrowDown'

import Layout from '../components/Layout'
import BlogPostCard from '../components/BlogPostCard'

const Blog = ({data}) => {
    return (
        <Layout>
            <h1 className="text-5xl">Blog</h1>
            <p className="my-4">Hello! In this page you can see my blog, with every blog post I have made so far.<br/> I will mainly talk about my software engineering journey and tech related stuff, but occasionally you might find something related to other hobbies of mine, or just rambling nonsense. <br/>Hope you enjoy. 👌</p>
            <h2 className="flex items-center mt-8 mb-4 justify-center md:justify-start"><div className="mr-1">All my Blog Posts</div><FaArrowDown /></h2>
            <p className="mb-7">{data.allMarkdownRemark.totalCount} {data.allMarkdownRemark.totalCount === 1 ? 'post' : 'posts'}</p>
            <div className="flex flex-wrap justify-center md:justify-evenly">
                {
                  data.allMarkdownRemark.edges.map(({node}) => (
                    <BlogPostCard 
                        className="w-9/12 md:w-80 mx-5 my-3" 
                        node={node}
                    />
                  ))
                }
            </div>
        </Layout>
    )
}

export default Blog

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC },
        ) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        cover {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt(format: PLAIN, pruneLength: 100)
                    timeToRead
                }
            }
        }
    }
`
