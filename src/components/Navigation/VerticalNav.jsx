// Assets
import MeditationIcon from '../../assets/icons/icon-meditation.svg'
import SwimmingIcon from '../../assets/icons/icon-swimming.svg'
import BikingIcon from '../../assets/icons/icon-biking.svg'
import MusculationIcon from '../../assets/icons/icon-musculation.svg'

const VerticalNav = () => {
    return (
        <nav>
            <ul>
                <li><img src={MeditationIcon} alt="" /></li>
                <li><img src={SwimmingIcon} alt="" /></li>
                <li><img src={BikingIcon} alt="" /></li>
                <li><img src={MusculationIcon} alt="" /></li>
            </ul>
            <small>Copyright, SportSee 2023</small>
        </nav>
    )
}

export default VerticalNav