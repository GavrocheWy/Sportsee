// Dependencies
import { useContext } from "react"
import UserContext from '../../context/UserContext'
import { useNavigate } from "react-router-dom";

const ProfilSelection = () => {

    const navigate = useNavigate();
    const { userId, setUserId } = useContext(UserContext)

    const setUser = (id) => {
        setUserId(id)
        navigate('/')
    }

    const getUserById = (id) => {
        switch (id) {
            case '12' || 12:
                return 'Karl';
            case '18' || 18:
                return 'Cecilia'
            default:
                return ''
        }
    }

    return (
        <div className="profil-selection__wrapper">
            <div className="profil-selection">
                <h1>Sélectionnez un profil :</h1>
                {userId && <p>Vous êtes connecté en tant que {getUserById(userId)}.</p>}
                {!userId && <p>Choisissez un profil pour continuer</p>}
                <button className="profil-selection__btn" disabled={userId === '12'} onClick={() => setUser('12')}>Se connecter en tant que <span>Karl</span></button>
                <button className="profil-selection__btn" disabled={userId === '18'} onClick={() => setUser('18')}>Se connecter en tant que <span>Cecilia</span></button>
            </div>
        </div>
    )
}

export default ProfilSelection