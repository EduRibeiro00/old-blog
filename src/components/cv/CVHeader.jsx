import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'

import profilePhoto from '../../images/profile-photo.jpg'

const CVHeader = ({ data }) => {
    const CVData = data.cvJson

    return (
        <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-2">
                <h1 className="text-5xl">{CVData.name}</h1>
                <div className="mt-4">
                    {
                        CVData.occupations.map((occupation) => (
                            <h2 className="text-lg">{occupation.title} @ <a href={occupation.institution_link}>{occupation.institution}</a></h2>
                        ))
                    }
                </div>
                <p className="mt-5 text-sm">{CVData.bio}</p>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col items-center">
                <div className="w-3/5">
                    <img src={profilePhoto} alt="Profile" className="profile-pic" />
                </div>
                <div className="mt-3">
                    <div className="flex items-center my-2 lg:my-0"><FaEnvelope className="mr-1" /> <a href={CVData.email.link}>{CVData.email.name}</a></div>
                    <div className="flex items-center my-2 lg:my-0"><FaLinkedin className="mr-1" /> <a href={CVData.linkedin.link}>{CVData.linkedin.name}</a></div>
                    <div className="flex items-center my-2 lg:my-0"><FaGithub className="mr-1" /> <a href={CVData.github.link}>{CVData.github.name}</a></div>
                </div>
                <div className="mt-3 text-xl lg:text-base"><a className="btn-blue" href={CVData.cv_pdf}>CV PDF</a></div>
            </div>
        </div>
    )
}

export default (props) => (
    <StaticQuery 
        query={graphql`
            query {
                cvJson {
                    bio
                    cv_pdf
                    name
                    occupations {
                        institution
                        institution_link
                        title
                    }
                    email {
                        link
                        name
                    }
                    github {
                        link
                        name
                    }
                    linkedin {
                        link
                        name
                    }
                }
            }          
        `}
        render={(data) => <CVHeader data={data} {...props} />}
    />
)