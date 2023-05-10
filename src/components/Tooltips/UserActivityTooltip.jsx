const UserActivityTooltip = ({active, payload}) => {
    if (active) {
        return (
            <div className="tooltip__activity">
                <p className="tooltip__activity--text">{payload[0].value}kg</p>
                <p className="tooltip__activity--text">{payload[1].value}Kcal</p>
            </div>
        )
    } else {
        return null
    }
}

export default UserActivityTooltip