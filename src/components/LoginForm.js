/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

import InputField from "./InputField"
import WideButton from "./WideButton"

const css = require("./LoginForm.scss")

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="LoginForm__wrapper">
                <InputField labelText = "e-mail" name = "e-mail" type="text"/>
                <InputField labelText = "password" name = "password" type = "password" />
                <WideButton name = "button" text = "login"/>
                <div className="LoginForm__forgot-wrapper">
                    <a href="#">Unustasin parooli</a>
                </div>
            </div>
        );
    }
}