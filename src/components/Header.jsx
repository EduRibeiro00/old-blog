import React, { useState } from "react"

import { FaBars } from '@react-icons/all-files/fa/FaBars'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="flex flex-wrap px-5 py-3 bg-gradient-to-l from-gray-900 to-blue-800 items-center justify-between">
            <a className="text-white font-bold hover:text-white" href="/">Eduardo Ribeiro</a>
            <div onClick={() => setMenuOpen(!menuOpen)} className="md:hidden block text-white cursor-pointer">
                { menuOpen ? <FaTimes /> : <FaBars /> }
            </div>
            
            <div className={`mt-4 md:mt-0 md:flex md:items-center md:w-auto w-full ${menuOpen ? "block" : "hidden"}`}>
                <div className="block pb-2 md:py-0 md:pr-2 md:mr-2 md:border-r"><a className="text-white text-sm hover:underline hover:text-white" href="/blog">Blog</a></div>
                <div className="block py-2 md:py-0 md:pr-2 md:mr-2 md:border-r"><a className="text-white text-sm hover:underline hover:text-white" href="/cv">CV</a></div>
                <div className="block py-2 md:py-0 md:pr-2 md:mr-2 md:border-r"><a className="text-white text-sm hover:underline hover:text-white" href="/projects">Projects</a></div>
                <div className="block py-2 md:py-0 md:pr-2 md:mr-2 md:border-r"><a className="text-white text-sm hover:underline hover:text-white" href="https://github.com/EduRibeiro00">GitHub</a></div>
                <div className="block pt-2 md:py-0 md:pr-2"><a className="text-white text-sm hover:underline hover:text-white" href="https://www.linkedin.com/in/eduardocribeiro/">LinkedIn</a></div>
            </div>
        </nav>
    )
}

export default Header