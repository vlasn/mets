/**
 * Created by clstrfvck on 12/04/2017.
 */
//This is a wrapper for the login view/page.

import React from "react"
import { connect } from 'react-redux'
import { logIn, credentialChange, betterLogin } from '../actions/userActions'
import LoginForm from './LoginForm'
import axios from "axios"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Login extends React.Component {
    componentWillUpdate(){
    }
    render() {
        this.props.navigateToRoot ? this.props.history.push('/') : null
        return (
            <MuiThemeProvider>
                <div className="login__wrapper">
                    <LoginForm {...this.props} />
                </div>
            </MuiThemeProvider>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (key, data) => dispatch(credentialChange(key, data)),
        onSubmitLogin: (id, pass) => {

        }
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        loggedIn: state.user.loggedIn,
        error: state.user.error,
        email: state.user.email,
        password: state.user.password,
        navigateToRoot: state.user.navigateToRoot
    };
};

export default connect(
    mapStateToProps,
    { credentialChange, betterLogin}
    )(Login);