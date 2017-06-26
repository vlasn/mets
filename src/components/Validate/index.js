/**
 * Created by clstrfvck on 19/04/2017.
 */

//This is a wrapper for the first sign on view/page.

import React from "react"
import { connect } from 'react-redux'
import { resetPassword, credentialChange, verify } from './validationActions'
import FirstPassword from './FirstPassword'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Redirect from 'react-router-dom'

class Validate extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if(!this.props.verified){this.props.verify(this.props.match.params.hash); console.log('Verifyin\'')}
    }

    render() {

        return (
            <MuiThemeProvider>
            <div className="login__wrapper">
                {this.props.navigateToRoot ?
                    this.props.history.push("/") : <FirstPassword {...this.props}/>}
            </div>
            </MuiThemeProvider>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.validation.loading,
        loggedIn: state.user.loggedIn,
        validationError: state.validation.validationError,
        password: state.validation.password,
        cpassword: state.validation.cpassword,
        navigateToRoot: state.validation.navigateToRoot
    };
};

export default connect(
    mapStateToProps,
    {credentialChange, resetPassword, verify}
)(Validate);