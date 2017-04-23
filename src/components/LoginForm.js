/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"

import InputField from "./InputField"
import WideButton from "./WideButton"
import Error from "./Error"

const css = require("./LoginForm.scss");

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
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
                <form onSubmit={e=>e.preventDefault()}>
                    <InputField labelText = "E-mail" name = "email" type="text" updateValue = {this.props.updateValue}/>
                    <InputField labelText = "Parool" name = "password" type = "password" updateValue = {this.props.updateValue}/>
                    {this.props.error ? <Error text = {this.props.error}/> : null}
                    <WideButton name = "button" text = "logi sisse" submitHandler = {this.loginHandler.bind(this)}/>
                </form>
                <div className="LoginForm__forgot-wrapper">
                    <a href="#" className="LoginForm__forgot-link">Unustasin parooli</a>
                </div>
            </div>
        );
    }
}