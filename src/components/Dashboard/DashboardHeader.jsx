// Dependencies
import { useContext } from "react"
import UserContext from '../../context/UserContext'

const DashboardHeader = () => {

    const { user } = useContext(UserContext)
    
    return (
        <header>
            <h1>Bonjour {user ? user.infos.userInfos.firstName : ''}</h1>
            <p>Félicitations ! Vous avez explosé vos objectifs d'hier 👏</p>
        </header>
    )
}

export default DashboardHeader