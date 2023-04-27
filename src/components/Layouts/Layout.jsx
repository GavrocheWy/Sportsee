// Dependencies
import React from 'react'
import { Outlet } from 'react-router-dom'
// Components
import HorizontalNav from '../Navigation/HorizontalNav'

const Layout = () => {
    return (
        <React.Fragment>
            <HorizontalNav />
            <Outlet />
        </React.Fragment>
    )
}

export default Layout