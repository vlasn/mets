/**
 * Created by henrysavi on 19/04/17.
 */
import React from "react"

const css = require("./Button.scss")

export default class Button extends React.Component{
    constructor(props) {
        super(props);
        this.btnClicked = this.btnClicked.bind(this);
    }

    btnClicked() {
        console.log("clicked")
    }

    computeClassNames() {
        let theme = this.props.theme == "green" ? "Button__theme-green" : "Button__theme-black";
        let side = this.props.side == "left" ? "Button__side-left" : "Button__side-right";
        return {theme, side}
    }

    render() {
        return(
            <div className = {"Button__wrapper "+ this.computeClassNames().side} >
                <button
                    className = {"Button__button " + this.computeClassNames().theme}
                    name = {this.props.name}
                    onClick={event => this.btnClicked()}
                >
                    {this.props.text}
                </button>
            </div>
        );
    }
}