import React from 'react'
import { graphql } from 'gatsby'
import { FaArrowDown } from '@react-icons/all-files/fa/FaArrowDown'

import Layout from '../components/Layout'
import BlogPostCard from '../components/BlogPostCard'
import SEO from '../components/SEO'

const Blog = ({ data }) => {
    return (
        <Layout>
            <SEO title="Blog" />
            <h1 className="text-5xl">Blog</h1>
            <p className="my-4">Hello! In this page you can see my blog, with every blog post I have made so far.<br/> I will mainly talk about my software engineering journey and tech related stuff, but occasionally you might find something related to other hobbies of mine, or just rambling nonsense. <br/>Hope you enjoy. 👌</p>
            <p>If you want to stay tuned, this blog is also available as an <a href={data.dataJson.rss_feed}>RSS Feed</a>!</p>
            <p>I also post on other platforms, so make sure you follow me on <a href={data.dataJson.dev.link}>DEV</a> and <a href={data.dataJson.medium.link}>Medium</a> 😃</p>
            <h2 className="flex items-center mt-8 mb-4 justify-center md:justify-start"><div className="mr-1">All my Blog Posts</div><FaArrowDown /></h2>
            <p className="mb-7 text-center md:text-left">{data.allMarkdownRemark.totalCount} {data.allMarkdownRemark.totalCount === 1 ? 'post' : 'posts'}</p>
            <div className="flex flex-wrap justify-center md:justify-evenly">
                {
                  data.allMarkdownRemark.edges.map(({ node }) => (
                    <BlogPostCard 
                        key={node.id}
                        className="w-full md:w-80 mx-5 my-3" 
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
        dataJson {
            dev {
                link
            }
            medium {
                link
            }
            rss_feed
        }
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
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                            publicURL
                            extension
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
