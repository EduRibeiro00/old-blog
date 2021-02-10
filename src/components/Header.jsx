import React, { useState } from "react"

import { FaBars } from '@react-icons/all-files/fa/FaBars'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'

const Header = ({ links }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pBottomNav = menuOpen ? 'pb-0' : 'pb-4'

    return (
        <nav className={`flex flex-wrap pt-4 ${pBottomNav} md:py-0 pr-5 md:pr-0 bg-gradient-to-l from-gray-900 to-blue-800 items-center justify-between`}>
            <a className="ml-5 text-white font-bold hover:text-white" href="/">Eduardo Ribeiro</a>
            <div onClick={() => setMenuOpen(!menuOpen)} className="md:hidden block text-white cursor-pointer">
                { menuOpen ? <FaTimes /> : <FaBars /> }
            </div>
            
            <div className={`mt-4 md:mt-0 flex flex-col md:flex-row items-start md:items-stretch md:w-auto w-full ${menuOpen ? "block" : "hidden"}`}>
                <div className="header-link px-4 pt-4 pb-3">
                    <a className="text-white text-sm hover:text-white" href="/blog">Blog</a>
                </div>
                <div className="header-link px-4 pt-4 pb-3">
                    <a className="text-white text-sm hover:text-white" href="/cv">CV</a>
                </div>
                <div className="header-link px-4 pt-4 pb-3">
                    <a className="text-white text-sm hover:text-white" href="/projects">Projects</a>
                </div>
                <div className="header-link px-4 pt-4 pb-3">
                    <a className="text-white text-sm hover:text-white" href={links.github.link}>GitHub</a>
                </div>
                <div className="header-link px-4 pt-4 pb-3">
                    <a className="text-white text-sm hover:text-white" href={links.linkedin.link}>LinkedIn</a>
                </div>
            </div>
        </nav>
    )
}

export default Header