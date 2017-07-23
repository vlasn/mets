import React from "react"
import PropTypes from "prop-types"
import "./CardWideButton.scss"

export const CardWideButton = props => (
    <div className="CardWideButton" onClick={props.callback}>
        <input className="CardWideButton__button" type="submit" value={props.value} name={props.value}/>
    </div>
);

CardWideButton.propTypes = {
    value: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}

export default CardWideButton