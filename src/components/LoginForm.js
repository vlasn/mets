/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"
import Error from "./Error"
import LoginTextField from "./LoginTextField"
import LoginButton from "./LoginButton"
const css = require("./LoginForm.scss");

const styles = {
    button: {
        color: 'black'
    },
}

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    loginHandler() {
        this.props.betterLogin(
            this.props.email,
            this.props.password
        )
    }

    render(){
        return(
            <div className = "LoginForm__wrapper">
                <form onSubmit={e=>e.preventDefault()}>
                    <LoginTextField
                        hintText = "E-mail"
                        name = "email" type="text"
                        updateValue = {this.props.credentialChange}
                        style={styles.button}
                        backgroundColor= "#9bfcd3"
                        hoverColor = "#9bfcd3"
                        fullWidth={true}
                        floatingLabelText="Meiliaadress"
                    />
                    <LoginTextField
                        hintText = "Parool"
                        name = "password"
                        type = "password"
                        updateValue = {this.props.credentialChange}
                        fullWidth={true}
                        floatingLabelText="Parool uuesti"

                    />
                    {this.props.error ? <Error text = {this.props.error}/> : null}
                    <div className="FirstPassword__button">
                        <LoginButton
                            name = "button"
                            label="Logi sisse"
                            labelStyle ={styles.button}
                            backgroundColor= "#9bfcd3"
                            hoverColor = "#9bfcd3"
                            submitHandler = {this.loginHandler.bind(this)}
                            fullWidth={true}
                        />
                    </div>
                </form>
                <div className="LoginForm__forgot-wrapper">
                    <a href="#" className="LoginForm__forgot-link">Unustasin parooli</a>
                </div>
            </div>
        );
    }
}