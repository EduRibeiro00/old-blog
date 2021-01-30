import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = children => {
    return (
        <>
            <Header />
            <div class="page-content">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout