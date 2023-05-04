// Dependencies
import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from "react-router-dom";
// Components
import VerticalNav from '../components/Navigation/VerticalNav'
import Dashboard from '../components/Dashboard/Dashboard'

const HomePage = () => {

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
            <Navigate to="/profil"/>
        )
    }


}

export default HomePage