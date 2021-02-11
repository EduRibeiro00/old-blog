import React from "react"
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'

const currentYear =  new Date().getFullYear()

const Footer = ({ links }) => {
    return (
        <div className="w-full text-center my-3">
            <div className="text-gray-800 text-xs">@ {currentYear} - Eduardo Carreira Ribeiro</div>
            <div className="flex align-center justify-center mt-2">
                <a className="text-lg text-gray-800 hover:text-gray-700 px-2" aria-label="email" href={links.email.link}><FaEnvelope /></a>
                <a className="text-lg text-gray-800 hover:text-gray-700 px-2" aria-label="github" href={links.github.link}><FaGithub /></a>
                <a className="text-lg text-gray-800 hover:text-gray-700 px-2" aria-label="linkedin" href={links.linkedin.link}><FaLinkedin /></a>
            </div>
        </div>
    )
}

export default Footer