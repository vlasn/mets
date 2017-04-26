/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

const css = require("./InputField.scss")

export default class LoginTextFieldInputField extends React.Component{
    constructor(props) {
        super(props);
        this.textChangeHandler = this.textChangeHandler.bind(this);
    }

    textChangeHandler(event) {
        this.props.updateValue(
            this.props.name, event.target.value
        );
    }

    render(){
        return(
            <div className = "InputField__wrapper">
                <label htmlFor={this.props.name} className = "InputField__label">{this.props.labelText}</label>
                <input id={this.props.name}
                       type={this.props.type}
                       className = "InputField__input"
                       onChange={(event)=>this.textChangeHandler(event)}
                       errorText={this.props.errorText}

                />
            </div>
        );
    }
}