import React from 'react'
import { FaArrowDown } from '@react-icons/all-files/fa/FaArrowDown'

import Layout from '../components/Layout'
import BlogPostCard from '../components/BlogPostCard'

const Blog = () => {
    return (
        <Layout>
            <h1 className="text-5xl">Blog</h1>
            <p className="my-4">Hello! In this page you can see my blog with every blog post I have made so far. I will mainly talk about my software engineering journey and tech related stuff, but occasionally you might find something related to other hobbies of mine, or just rambling nonsense. <br/>Hope you enjoy. 👌</p>
            <h2 className="flex items-center my-7 justify-center md:justify-start"><div className="mr-1">All my Blog Posts</div><FaArrowDown /></h2>
            {/* TODO: mudar layout dos cards para grid */}
            <div className="flex flex-wrap justify-center md:justify-evenly">
                <BlogPostCard className="w-9/12 md:w-80 mx-5 my-3" />
                <BlogPostCard className="w-9/12 md:w-80 mx-5 my-3" />
                <BlogPostCard className="w-9/12 md:w-80 mx-5 my-3" />
                <BlogPostCard className="w-9/12 md:w-80 mx-5 my-3" />
                <BlogPostCard className="w-9/12 md:w-80 mx-5 my-3" />
                <BlogPostCard className="w-9/12 md:w-80 mx-5 my-3" />
                <BlogPostCard className="w-9/12 md:w-80 mx-5 my-3" />
                <BlogPostCard className="w-9/12 md:w-80 mx-5 my-3" />
                <BlogPostCard className="w-9/12 md:w-80 mx-5 my-3" />
            </div>
        </Layout>
    )
}

export default Blog