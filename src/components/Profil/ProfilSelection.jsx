// Dependencies
import { useContext } from "react"
import UserContext from '../../context/UserContext'
import { useNavigate } from "react-router-dom";

const ProfilSelection = () => {

    const navigate = useNavigate();
    const { setUserId } = useContext(UserContext)

    const setUser = (id) => {
        setUserId(id)
        navigate('/')
    }

    return (
        <div>
            <h1>Sélectionnez votre profil :</h1>
            <button onClick={() => setUser('12')}>Set User 12</button>
            <button onClick={() => setUser('18')}>Set User 18</button>
        </div>
    )
}

export default ProfilSelection