/**
 * Created by clstrfvck on 12/04/2017.
 */
//This is a wrapper for the login view/page.

import React from "react"
import { connect } from 'react-redux'
import { credentialChange, login } from './loginActions'
import LoginForm from './LoginForm'

class Login extends React.Component {
    componentWillReceiveProps(newProps){
        newProps.navigateToRoot ? this.props.history.push('/') : null
    }

    render() {
        return (
                <div className="login__wrapper">
                    <LoginForm {...this.props} />
                </div>
        )
    }
}

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
    { credentialChange, login }
    )(Login);