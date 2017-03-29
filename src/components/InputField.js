/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

const css = require("./InputField.scss")

export default class InputField extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className = "InputField__wrapper">
                <label htmlFor={this.props.name} className = "InputField__label">{this.props.labelText}</label>
                <input id={this.props.name} type={this.props.type} className = "InputField__input"/>
            </div>
        );
    }
}