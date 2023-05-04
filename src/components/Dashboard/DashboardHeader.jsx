// Dependencies
import { useContext } from "react"
import UserContext from '../../context/UserContext'

const DashboardHeader = () => {

    const { user } = useContext(UserContext)
    
    return (
        <header className="dashboard-header">
            <h1 className="dashboard-header__title">Bonjour <span className="dashboard-header__title-name">{user ? user.infos.userInfos.firstName : ''}</span></h1>
            <p className="dashboard-header__text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default DashboardHeader