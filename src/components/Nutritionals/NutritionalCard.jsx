import PropTypes from 'prop-types';

const NutritionalCard = ({ icon, text, subText }) => {
    return (
        <article className="nutritional-card">
            <img className="nutritional-card--image" src={icon} alt={subText} />
            <div className="nutritional-card__content">
                <p className="nutritional-card__content--number">{text}</p>
                <p className="nutritional-card__content--text">{subText}</p>
            </div>
        </article>
    )
}

export default NutritionalCard

NutritionalCard.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    subText: PropTypes.string
}