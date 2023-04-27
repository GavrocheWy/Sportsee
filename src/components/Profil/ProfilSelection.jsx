// Dependencies
import { useContext } from "react"
import UserContext from '../../context/UserContext'
import { GetUserInfos } from '../../api/datas'

const ProfilSelection = () => {

    const { setUserId } = useContext(UserContext)

    return (
        <div>
            <h1>Sélectionnez votre profil :</h1>
            <button onClick={() => setUserId('12')}>Set User 12</button>
            <button onClick={() => setUserId('18')}>Set User 18</button>
        </div>
    )
}

export default ProfilSelection