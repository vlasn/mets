/**
 * Created by clstrfvck on 12/04/2017.
 */
//This is a wrapper for the login view/page.

import React from "react"
import { connect } from 'react-redux'
import { logIn, credentialChange } from '../actions/userActions'
import LoginForm from './LoginForm'
import axios from "axios"

class Login extends React.Component {
    render() {
        return (
            <div className="login__wrapper">
                <LoginForm {...this.props} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (key, data) => dispatch(credentialChange(key, data)),
        onSubmitLogin: (id, pass) => {
            dispatch({type: "LOG_IN_ATTEMPT"});
            axios.post("/api/auth/login", {email: id, password: pass})
                .then(response => {
                    dispatch(logIn(response.data))
                })
                .catch(err => dispatch(logIn(err)))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        loggedIn: state.user.loggedIn,
        error: state.user.error,
        email: state.user.email,
        password: state.user.password
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Login);