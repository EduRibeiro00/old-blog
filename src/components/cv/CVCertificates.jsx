import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const CVCertificates = ({ data }) => {
    return (
        <div>
            <h2>Certificates & Prizes</h2>
            {
                data.allCertificatesJson.edges.map(({ node }) => (
                    <div>
                        <h3>{node.title}</h3>
                        <p>{node.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default (props) => (
    <StaticQuery 
        query={graphql`
            query {
                allCertificatesJson {
                    edges {
                        node {
                            title
                            description
                        }
                    }
                }
            }          
        `}
        render={(data) => <CVCertificates data={data} {...props} />}
    />
)