import React from 'react'
import { FaArrowDown } from '@react-icons/all-files/fa/FaArrowDown'

import Layout from '../components/Layout'
import BlogPostCard from '../components/BlogPostCard'

const Blog = () => {
    return (
        <Layout>
            <h1 className="text-5xl">Blog</h1>
            <p className="my-4">Hello! This is my blog. I will fill this text out after. Dummy text</p>
            <h2 className="flex items-center my-7 justify-center sm:justify-start"><div className="mr-1">All my Blog Posts</div><FaArrowDown /></h2>
            {/* TODO: mudar layout dos cards para grid */}
            <div className="flex flex-wrap justify-center sm:justify-around">
                <BlogPostCard className="mx-4 my-3" />
                <BlogPostCard className="mx-4 my-3" />
                <BlogPostCard className="mx-4 my-3" />
                <BlogPostCard className="mx-4 my-3" />
                <BlogPostCard className="mx-4 my-3" />
                <BlogPostCard className="mx-4 my-3" />
                <BlogPostCard className="mx-4 my-3" />
                <BlogPostCard className="mx-4 my-3" />
                <BlogPostCard className="mx-4 my-3" />
                <BlogPostCard className="mx-4 my-3" />
            </div>
        </Layout>
    )
}

export default Blog