// Dependencies
import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from "react-router-dom";
// Components
import VerticalNav from '../components/Navigation/VerticalNav'
import Dashboard from '../components/Dashboard/Dashboard'

/** Display the profil page where user can find charts and datas. If there is no profil selected, the user is sent to the home page
 * @return {JSX}
 */

const ProfilPage = () => {

    const { userId } = useContext(UserContext)

    if (userId) {
        return (
            <div className='page-wrapper'>
                <VerticalNav />
                <Dashboard />
            </div>
        )
    } else {
        return (
            <Navigate to="/"/>
        )
    }


}

export default ProfilPage