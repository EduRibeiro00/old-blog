import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const CVCertificates = ({ data }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl mb-2 underline">Certificates & Prizes</h2>
            {
                data.allCertificatesJson.edges.map(({ node }) => (
                    <div key={node.id} className="mb-2">
                        <h3 className="text-sm">{node.title}</h3>
                        <p className="text-sm">{node.description}</p>
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
                            id
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