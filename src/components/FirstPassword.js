/**
 * Created by henrysavi on 12/04/17.
 */
import React from "react"
import LoginTextField from "./LoginTextField"
import LoginButton from "./LoginButton"
import Error from "./Error"
const css = require("./FirstPassword.scss");

const labelStyles = {
    headerButton: {
        color: 'white'
    }
}

export default class FirstPassword extends React.Component {
    constructor(props){
        super(props)
        //console.log('FirstPass:', props)
    }

    handleSubmit() {
        this.props.resetPassword(
            this.props.password,
            this.props.cpassword,
            this.props.match.params.hash
        )
    }

    render() {
        return(
            <div className = "FirstPassword__wrapper">
               <h1 className="FirstPassword__title">Vali endale salasõna</h1>
               <LoginTextField
                   hintText="Parool"
                   name="password"
                   type = "password"
                   floatingLabelText="Parool"
                   fullWidth={true}
                   updateValue = {this.props.credentialChange}
               />
               <LoginTextField
                   hintText="Parool uuesti"
                   name="cpassword"
                   type = "password"
                   floatingLabelText="Parool uuesti"
                   fullWidth={true}
                   updateValue = {this.props.credentialChange}
                   errorText = {this.props.error}

               />
                {this.props.validationError ? <Error>{this.props.validationError}</Error> : null}
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