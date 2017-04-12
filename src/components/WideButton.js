/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

const css = require("./WideButton.scss")

export default class WideButton extends React.Component{
    constructor(props) {
        super(props);
        this.btnClicked = this.btnClicked.bind(this)
    }

    btnClicked(event) {
        this.props.loginHandler(event);
    }

    render() {
        return(
            <div className = "WideButton__wrapper">
                <button
                    className = "WideButton__button"
                    name = {this.props.name}
                    onClick = {event => this.btnClicked(event)}
                >
                    {this.props.text}
                </button>
            </div>
        );
    }
}