/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

import InputField from "./InputField"
import WideButton from "./WideButton"

const css = require("./LoginForm.scss");
const axios = require("axios");

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


    //rewrite the above to emit changes to Redux state!

    handleLogin(event) {
        console.log(this.props);
        //Input validation logic goes here.
       if(!!this.state.email && !!this.state.password) {
           axios.post('/api/auth/login', {
               body: JSON.stringify({
                   email: this.state.email,
                   password: this.state.password
               })
           })
               .then(response => console.log(response.data))
               .catch(error => console.log(`Something's gone wrong! ${error}`))
       }
    }

    render(){
        return(
            <div className="LoginForm__wrapper">
                <h1>Siin on logo</h1>
                <InputField labelText = "E-mail" name = "email" type="text" updateValue = {this.updateValue}/>
                <InputField labelText = "Parool" name = "password" type = "password" updateValue = {this.updateValue}/>
                <WideButton name = "button" text = "logi sisse" loginHandler = {this.props.onSubmitLogin}/>
                <div className="LoginForm__forgot-wrapper">
                    <a href="#">Unustasin parooli</a>
                </div>
            </div>
        );
    }
}