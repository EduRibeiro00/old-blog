import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'

import profilePhoto from '../../images/profile-photo.jpg'

const CVHeader = ({ data }) => {
    const CVData = data.cvJson

    // TODO: por isto em duas colunas como deve ser
    return (
        <div className="grid grid-cols-2">
            <div>
                <h1>{CVData.name}</h1>
                <div>
                    {
                        CVData.occupations.map((occupation) => (
                            <h2>{occupation.title} @ <a href={occupation.institution_link}>{occupation.institution}</a></h2>
                        ))
                    }
                </div>
                <p>{CVData.bio}</p>
            </div>
            <div>
                <div className="p-0 mb-2 w-1/3">
                    <img src={profilePhoto} alt="Profile" className="rounded-full m-0 border-4 border-blue-600" />
                </div>
                <div>
                    <div className="flex items-center"><FaEnvelope className="mr-1" /> <a href={CVData.email.link}>{CVData.email.name}</a></div>
                    <div className="flex items-center"><FaLinkedin className="mr-1" /> <a href={CVData.linkedin.link}>{CVData.linkedin.name}</a></div>
                    <div className="flex items-center"><FaGithub className="mr-1" /> <a href={CVData.github.link}>{CVData.github.name}</a></div>
                </div>
                <div><a href={CVData.cv_pdf}>CV PDF</a></div>
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