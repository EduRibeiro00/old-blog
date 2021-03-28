import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ data, children }) => {
    return (
        <main className="flex flex-col min-h-screen">
            <Header links={data.dataJson} />
            <div className="flex-1 container py-7">
                {children}
            </div>
            <Footer links={data.dataJson} />
        </main>
    )
}

export default (props) => (
    <StaticQuery 
        query={graphql`
			query {
				dataJson {
					email {
						link
					}
					github {
						link
					}
					linkedin {
						link
					}
					dev {
						link
					}
					medium {
						link
					}
				}
			} 
        `}
        render={(data) => <Layout data={data} {...props} />}
    />
)
