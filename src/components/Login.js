/**
 * Created by clstrfvck on 12/04/2017.
 */
import React from "react"
import { connect } from 'react-redux'
import { logIn } from '../actions/userActions'
import LoginForm from './LoginForm'

class Login extends React.Component {
    render() {
        const { onSubmitLogin } = this.props;
        return (
            <div>
                <LoginForm onSubmitLogin={onSubmitLogin} />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitLogin: (id, pass) => dispatch(logIn(id, pass))
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        loggedIn: state.user.loggedIn,
        error: state.user.error
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);