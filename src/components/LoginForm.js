/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

import {InputField} from "./InputField"

export class LoginForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="login__form-wrapper">
                <InputField label = "e-mail" type="text"/>
                <InputField label = "password" type="password" />

            </div>
        );
    }
}