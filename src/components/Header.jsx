import React, { useState } from "react"

import { FaBars } from '@react-icons/all-files/fa/FaBars'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'

const Header = ({ links }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pBottomNav = menuOpen ? 'pb-0' : 'pb-4'

    return (
        <nav className={`flex flex-wrap pt-4 ${pBottomNav} md:py-0 pr-5 md:pr-0 bg-gradient-to-l from-gray-900 to-blue-800 items-center justify-between`}>
            <a className="ml-5 text-white font-bold hover:text-white" href="/">Eduardo Ribeiro</a>
            <div 
                onKeyPress={() => setMenuOpen(!menuOpen)}
                onClick={() => setMenuOpen(!menuOpen)} 
                className="md:hidden block text-white cursor-pointer"
                role="button"
                tabIndex={0}>
                { menuOpen ? <FaTimes /> : <FaBars /> }
            </div>
            
            <div className={`mt-4 md:mt-0 md:flex flex-col md:flex-row items-start md:items-stretch w-full md:w-auto ${menuOpen ? "flex" : "hidden"}`}>
                <a className="header-link" href="/blog">Blog</a>
                <a className="header-link" href="/cv">CV</a>
                <a className="header-link" href="/projects">Projects</a>
                <a className="header-link" href={links.github.link}>GitHub</a>
                <a className="header-link" href={links.linkedin.link}>LinkedIn</a>
            </div>
        </nav>
    )
}

export default Header