/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

const css = require("./WideButton.scss")

export default class WideButton extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className = "WideButton__wrapper">
                <button className = "WideButton__button" name = {this.props.name}>{this.props.text}</button>
            </div>
        );
    }
}