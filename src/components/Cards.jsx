import React from "react";
import PropTypes from 'prop-types';

export default function Cards(props) {
    return (
        <>
            <div className="card__description">
                <h3 className="card__title">{props.title}</h3>
                <p className="card__text">{props.text}</p>
                <button className="card__btn">Go somewhere</button>
            </div>
        </>
    )
}
Cards.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,

}