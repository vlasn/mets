/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"
import Error from "./Error"
import LoginTextField from "./LoginTextField"
import LoginButton from "./LoginButton"

const styles = {
    container: {
        display: 'block',
        boxSizing: 'border-box',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '50%',
        alignContent: 'center',
    },
    button: {
        color: 'white'
    },
}

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
            <div style={styles.container}>
                <h1>Siin on logo</h1>
                <form onSubmit={e=>e.preventDefault()}>
                    <LoginTextField
                        hintText = "E-mail"
                        name = "email" type="text"
                        updateValue = {this.props.updateValue}
                        style={styles.button}
                        backgroundColor= "#00CC33"
                        hoverColor = "#009933"
                        fullWidth={true}
                    />
                    <LoginTextField
                        hintText = "Parool"
                        name = "password"
                        type = "password"
                        updateValue = {this.props.updateValue}
                        fullWidth={true}
                    />
                    {this.props.error ? <Error text = {this.props.error}/> : null}
                    <LoginButton
                        name = "button"
                        label="Logi sisse"
                        labelStyle ={styles.button}
                        backgroundColor= "#00CC33"
                        hoverColor = "#009933"
                        submitHandler = {this.loginHandler.bind(this)}/>
                </form>
                <a href="#" className="LoginForm__forgot-link">Unustasin parooli</a>
            </div>

        );
    }
}