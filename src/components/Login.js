/**
 * Created by clstrfvck on 12/04/2017.
 */
//This is a wrapper for the login view/page.

import React from "react"
import { connect } from 'react-redux'
import { logIn, credentialChange } from '../actions/userActions'
import LoginForm from './LoginForm'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { onSubmitLogin, updateValue } = this.props;
        return (
            <div className="login__wrapper">
                <LoginForm onSubmitLogin={onSubmitLogin} updateValue={updateValue} />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (key, data) => dispatch(credentialChange(key, data)),
        onSubmitLogin: (id, pass) => dispatch(logIn(id, pass))
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

export default connect(mapStateToProps,
    mapDispatchToProps
    )(Login);