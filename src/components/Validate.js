/**
 * Created by clstrfvck on 19/04/2017.
 */

//This is a wrapper for the first sign on view/page.

import React from "react"
import { connect } from 'react-redux'
import { passwordChange, credentialChange, verify } from '../actions/validationActions'
import FirstPassword from './FirstPassword'
import axios from "axios"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Redirect from 'react-router-dom'

class Validate extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if(!this.props.verified){this.props.verifyHash(this.props.match.params.hash); console.log('Verifyin\'')}
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

const mapDispatchToProps = (dispatch) => {
    return {
        credentialChange: (key, data) => dispatch(credentialChange(key, data)),

        verifyHash: (hash) => {
            dispatch({type:"VERIFICATION_ATTEMPT", payload: null});
            if(hash.length>0) {
                axios.get('/api/user/verify/'+hash)
                    .then(response => {dispatch(verify(response.data))})
                    .catch(err => {
                        console.log(err);
                        dispatch({type: "VERIFICATION_FAILURE", payload: "Something went wrong. Please try again."})
                    })
            } else {
                dispatch({type: "VERIFICATION_FAILURE", payload: "Something went wrong. Please try again."})
            }
        },

        resetPassword: (first, second, hash) => {
            //console.log(first,second,hash);
            dispatch({type: "VALIDATION_ATTEMPT"});

            if(first && first === second) {
                axios.post('/api/user/validate', {
                    password: first,
                    cpassword: second,
                    hash: hash
                })
                    .then(response => {
                        dispatch(passwordChange(response.data))
                    })
                    .catch(err => {
                        console.log(err);
                        dispatch({type: "VALIDATION_FAILURE", payload: "Something went wrong. Please try again"})
                    })
            } else {
                dispatch({type: "VALIDATION_MISMATCH",
                payload: "Palun tee kindlaks et sisestasid kaks identset parooli!"})
            }

        }
    }
};

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
    mapDispatchToProps
)(Validate);