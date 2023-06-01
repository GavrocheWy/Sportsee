// Dependencies
import { Link } from 'react-router-dom'

/** Display a not found page when user type a non-existent url
 * @return {JSX}
 */

const NotFoundPage = () => {
    return (
        <div className="notfound__wrapper">
            <h1 className="notfound__wrapper--title">404</h1>
            <p className="notfound__wrapper--text">Oops ! Nous n'avons pas trouvé la page que vous cherchez...</p>
            <Link to={'/'}>Retourner à la page d'accueil</Link>
        </div>
    )
}

export default NotFoundPage