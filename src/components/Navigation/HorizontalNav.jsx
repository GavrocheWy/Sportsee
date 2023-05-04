// Dependencies
import { NavLink } from 'react-router-dom'
// Assets
import SportseeLogo from '../../assets/logo/sportsee-logo.svg'

const HorizontalNav = () => {
    return (
        <nav className='upper-nav'>
            <NavLink>
                <img src={SportseeLogo} alt="logo de sportsee" />
            </NavLink>
            <ul className='upper-nav__navigation'>
                <li><NavLink to='/'>Accueil</NavLink></li>
                <li><NavLink to='/profil'>Profil</NavLink></li>
                <li><NavLink to='/settings'>Réglages</NavLink></li>
                <li><NavLink to='/community'>Communauté</NavLink></li>
            </ul>
        </nav>
    )
}

export default HorizontalNav