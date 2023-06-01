import PropTypes from 'prop-types';

/** Display a custom tooltip for the user average session chart
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */

const UserAverageSessionTooltip = ({active, payload}) => {
    if (active) {
        return (
            <div className="tooltip__average-session">
                <p className="tooltip__average-session--text">{payload[0].value}min</p>
            </div>
        )
    } else {
        return null
    }
}

export default UserAverageSessionTooltip

UserAverageSessionTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}