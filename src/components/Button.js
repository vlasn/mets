/**
 * Created by henrysavi on 19/04/17.
 */
import React from "react"

const css = require("./Button.scss")

export default class Button extends React.Component{
    constructor(props) {
        super(props);
        this.btnClicked = this.btnClicked.bind(this)
    }

    btnClicked() {
    }

    render() {
        return(
            <div className = "Button__wrapper">
                <button
                    className = "Button__button"
                    name = {this.props.name}
                    onClick={event => this.btnClicked()}
                >
                    {this.props.text}
                </button>
            </div>
        );
    }
}