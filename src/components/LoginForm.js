/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

import InputField from "./InputField"
import WideButton from "./WideButton"

const css = require("./LoginForm.scss")

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.updateValue = this.updateValue.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
    }

    updateValue(value, from) {
        this.setState({
            [from]: value
        });
    }


    handleLogin(e) {
        //Input validation logic goes here.
       if(!!this.state.email && !!this.state.password) {
           fetch('/api/auth', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                   email: this.state.email,
                   password: this.state.password
               })
           }).then((response) => {
               //further logic to follow
                console.log(response);
           })
       }

    }

    render(){
        return(
            <div className="LoginForm__wrapper">
                <InputField labelText = "e-mail" name = "email" type="text" updateValue = {this.updateValue}/>
                <InputField labelText = "password" name = "password" type = "password" updateValue = {this.updateValue}/>
                <WideButton name = "button" text = "login" loginHandler = {this.handleLogin}/>
                <div className="LoginForm__forgot-wrapper">
                    <a href="#">Unustasin parooli</a>
                </div>
            </div>
        );
    }
}