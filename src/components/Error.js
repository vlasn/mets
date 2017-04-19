import React from "react"
const css = require("./Error.scss");

export default class Error extends React.Component {
    render() {
        return(
            <div className = "Error__wrapper">
                <span className = "Error__text" >{this.props.text}</span>
            </div>
        )
    }
}