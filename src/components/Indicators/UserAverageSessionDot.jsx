import PropTypes from 'prop-types';

/** Return a custom dot for the user average session chart
 * @param  {number} cx
 * @param  {number} cy
 * @return {JSX}
 */

const UserAverageSessionDot = ({cx, cy}) => {
    return (
        <circle cx={cx} cy={cy} r={5} stroke="rgba(255, 255, 255, 0.25)" strokeWidth={15} fill="white" />
    )
}

export default UserAverageSessionDot

UserAverageSessionDot.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
}