import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
    return (
        <main>
            <Header />
            <div className="p-7">
                {props.children}
            </div>
            <Footer />
        </main>
    )
}

export default Layout