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
        return (
            <div className="login__wrapper">
                <FirstPassword {...this.props} />
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