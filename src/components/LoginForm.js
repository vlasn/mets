/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

import InputField from "./InputField"
import WideButton from "./WideButton"

const css = require("./LoginForm.scss");

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);
    }

    loginHandler() {
        this.props.onSubmitLogin(
            this.props.email,
            this.props.password
        )
    }

    render(){
        return(
            <div className="LoginForm__wrapper">
                <h1>Siin on logo</h1>
                <InputField labelText = "E-mail" name = "email" type="text" updateValue = {this.props.updateValue}/>
                <InputField labelText = "Parool" name = "password" type = "password" updateValue = {this.props.updateValue}/>
                <WideButton name = "button" text = "logi sisse" submitHandler = {this.loginHandler.bind(this)}/>
                <div className="LoginForm__forgot-wrapper">
                    <a href="#" className="LoginForm__forgot-link">Unustasin parooli</a>
                </div>
            </div>
        );
    }
}