import React from "react";
import PropTypes from "prop-types";

export default function Images(props) {
    return (
        <div className="card__img">
            <img className="img" src={props.url} alt="cap"/>
        </div>
    )
}

Images.propTypes = {
    url: PropTypes.string,
}

