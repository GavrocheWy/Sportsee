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