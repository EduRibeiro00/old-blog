import React from 'react'

import LandscapePhoto from '../images/landscape.jpeg'

const BlogPostCard = props => {
    return (
        <article className={props.className}>
            <div className="shadow-2xl rounded-xl overflow-hidden hover:bg-gray-200 transition">
                <img className="m-0" src={LandscapePhoto} alt="Blog post Photo"/>
                <div className="p-2">
                    <h1>Isto é um título</h1>
                    <div class="mt-2 text-xs text-gray-700">23/01/2021</div>
                </div>
            </div>
        </article>
    )
}

export default BlogPostCard