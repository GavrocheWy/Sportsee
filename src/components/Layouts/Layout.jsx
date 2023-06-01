// Dependencies
import React from 'react'
import { Outlet } from 'react-router-dom'
// Components
import HorizontalNav from '../Navigation/HorizontalNav'

/** Return the layout of the application
 * @return {JSX}
 */

const Layout = () => {
    return (
        <React.Fragment>
            <div className='app-wrapper'>
                <HorizontalNav />
                <Outlet />
            </div>
        </React.Fragment>
    )
}

export default Layout