import React from "react"
import propTypes from "prop-types"
import "./CardWideButton.scss"

export const CardWideButton = props => (
    <div className="CardWideButton">
        <input className="CardWideButton__button" type="submit" value={props.value} name={props.name}/>
    </div>
);

export default CardWideButton