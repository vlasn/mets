/**
 * Created by henrysavi on 12/04/17.
 */
import React from "react"
import LoginTextField from "./LoginTextField"
import LoginButton from "./LoginButton"
const css = require("./FirstPassword.scss");

const labelStyles = {
    headerButton: {
        color: 'white'
    }
}

export default class FirstPassword extends React.Component {
    constructor(props){
        super(props)
    }

    handleSubmit() {
        this.props.resetPassword(
            this.props.password,
            this.props.cpassword,
            this.props.hash,
        )
    }

    render() {
        return(
            <div className = "FirstPassword__wrapper">
               <h1 className="FirstPassword__title">Vali endale salasõna</h1>
               <LoginTextField
                   hintText="Parool"
                   type = "password"
                   floatingLabelText="Parool"
                   fullWidth={true}
                   updateValue = {this.props.credentialChange}
               />
               <LoginTextField
                   hintText="Parool uuesti"
                   type = "password"
                   floatingLabelText="Parool uuesti"
                   fullWidth={true}
                   updateValue = {this.props.credentialChange}
                   errorText = {this.props.error}

               />
                <div className="FirstPassword__button">
                   <LoginButton
                       backgroundColor= "#00CC33"
                       hoverColor = "#009933"
                       labelStyle ={labelStyles.headerButton}
                       submitHandler = {this.handleSubmit.bind(this)}
                       label="Mine metsa!"
                       fullWidth={true}
                   />
                </div>
            </div>

        )
    }
}