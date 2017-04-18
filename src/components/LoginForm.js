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
        this.loginHandler = this.loginHandler.bind(this)
    }

    updateValue(value, from) {
        this.setState({
            [from]: value
        });
    }


    loginHandler(event) {
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
                <h2 className="LoginForm__title">Metsahaldur 2.0</h2>
                <InputField labelText = "E-mail" name = "email" type="text" updateValue = {this.updateValue}/>
                <InputField labelText = "Parool" name = "password" type = "password" updateValue = {this.updateValue}/>
                <WideButton name = "button" text = "Logi sisse" loginHandler = {this.loginHandler}/>
                <div className="LoginForm__forgot-wrapper">
                    <a href="#" className="LoginForm__forgot-link">Unustasin parooli</a>
                </div>
            </div>
        );
    }
}