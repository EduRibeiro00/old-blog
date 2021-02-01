import React from 'react'
import { FaArrowDown } from '@react-icons/all-files/fa/FaArrowDown'

import Layout from '../components/Layout'

const Blog = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <p>Hello! This is my blog. I will fill this text out after. Dummy text</p>
            <h2>All my blog posts <FaArrowDown /></h2>
        </Layout>
    )
}

export default Blog