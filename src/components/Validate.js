/**
 * Created by clstrfvck on 19/04/2017.
 */

//This is a wrapper for the first sign on view/page.

import React from "react"
import { connect } from 'react-redux'
import { passwordChange, credentialChange } from '../actions/userActions'
import FirstPassword from './FirstPassword'

class Validate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { resetPassword, credentialChange } = this.props;
        return (
            <div className="login__wrapper">
                <FirstPassword newPassword={resetPassword} updateValue={credentialChange} />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        credentialChange: (key, data) => dispatch(credentialChange(key, data)),
        resetPassword: (first, second, hash, email) => dispatch(passwordChange(first,second,hash,email))
    }
};

const mapStateToProps = (state) => {
    console.log("state:", state)
    return {
        loading: state.user.loading,
        loggedIn: state.user.loggedIn,
        email: state.user.email,
        error: state.user.error,
        password: state.user.password,
        secondaryPass: state.user.secondaryPass,
        navigateToRoot: state.user.navigateToRoot
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Validate);