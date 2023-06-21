// Dependencies
import { useContext } from "react"
import UserContext from '../../context/UserContext'
import { useNavigate } from "react-router-dom";
import ErrorContext from "../../context/ErrorContext";

/** Display a profil selection window where user can choose between differents profils
 * @return {JSX}
 */

const ProfilSelection = () => {

    const navigate = useNavigate();
    const { userId, setUserId } = useContext(UserContext)
    const { setError } = useContext(ErrorContext)

    /** Set the user by an ID and navigate to the homepage
     * @param {string} id
     */

    const setUser = (id) => {
        setUserId(id)
        setError('')
        navigate('/profil')
    }

    /** Get the user by an ID and return user name in a string
     * @param {string} id
     * @return {string}
     */

    const getUserById = (id) => {
        switch (id) {
            case '12':
                return 'Karl';
            case '18':
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