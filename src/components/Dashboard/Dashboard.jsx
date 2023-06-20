// Components
import DashboardHeader from '../Dashboard/DashboardHeader'
import DashboardContent from './DashboardContent'
// Dependencies
import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import React from 'react'


/** Return the dashboard in the home page
 * @return {JSX}
 */

const Dashboard = () => {

    const { user } = useContext(UserContext)

    return (
        <div className='dashboard-wrapper'>
            <main className='dashboard'>
                {user ?
                    <React.Fragment>
                        <DashboardHeader />
                        <DashboardContent />
                    </React.Fragment>
                    : <p>Chargement des informations...</p>
                }
            </main>
        </div>
    )
}

export default Dashboard