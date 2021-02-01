import React from "react"

const Header = () => {
    return (
        <nav className="flex px-5 py-3 bg-gradient-to-l from-gray-900 to-blue-800 items-center justify-between">
            <h1 className="text-white font-bold">Eduardo Ribeiro</h1>
            <div className="">
                <a className="pr-2 mr-2 border-r text-white text-sm hover:underline hover:text-white" href="/blog">Blog</a>
                <a className="pr-2 mr-2 border-r text-white text-sm hover:underline hover:text-white" href="/cv">CV</a>
                <a className="pr-2 mr-2 border-r text-white text-sm hover:underline hover:text-white" href="/projects">Projects</a>
                <a className="pr-2 mr-2 border-r text-white text-sm hover:underline hover:text-white" href="https://github.com/EduRibeiro00">GitHub</a>
                <a className="text-white text-sm hover:underline hover:text-white" href="https://www.linkedin.com/in/eduardo-ribeiro-a3a5b9192/">LinkedIn</a>
            </div>
        </nav>
    )
}
    
export default Header