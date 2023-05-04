// Components
import DashboardHeader from '../Dashboard/DashboardHeader'
import DashboardContent from './DashboardContent'

const Dashboard = () => {
    return (
        <div className='dashboard-wrapper'>
            <main className='dashboard'>
                <DashboardHeader />
                <DashboardContent />
            </main>
        </div>
    )
}

export default Dashboard