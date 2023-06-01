// Assets
import MeditationIcon from '../../assets/icons/icon-meditation.svg'
import SwimmingIcon from '../../assets/icons/icon-swimming.svg'
import BikingIcon from '../../assets/icons/icon-biking.svg'
import MusculationIcon from '../../assets/icons/icon-musculation.svg'

/** Display the vertical navigation on the left. Currently not a real navigation
 * @return {JSX}
 */

const VerticalNav = () => {
    return (
        <nav className='side-nav'>
            <ul className='side-nav__navigation'>
                <li><img src={MeditationIcon} alt="" /></li>
                <li><img src={SwimmingIcon} alt="" /></li>
                <li><img src={BikingIcon} alt="" /></li>
                <li><img src={MusculationIcon} alt="" /></li>
            </ul>
            <small className='side-nav__copyright'>Copyright, SportSee 2023</small>
        </nav>
    )
}

export default VerticalNav