/**
 * Created by clstrfvck on 12/04/2017.
 */

import axios from "axios"

export const VALIDATION_CREDS = "VALIDATION_CREDS"
export const VERIFICATION_ATTEMPT = "VERIFICATION_ATTEMPT"
export const VERIFICATION_SUCCESS = "VERIFICATION_SUCCESS"
export const VERIFICATION_FAILURE = "VERIFICATION_FAILURE"
export const VALIDATION_ATTEMPT = "VALIDATION_ATTEMPT"
export const VALIDATION_SUCCESS = "VALIDATION_SUCCESS"
export const VALIDATION_FAILURE = "VALIDATION_FAILURE"
export const VALIDATION_MISMATCH = "VALIDATION_MISMATCH"


export function credentialChange(key, data) {
    return (dispatch)=>
    dispatch({
        type: VALIDATION_CREDS,
        payload: {
            key: key,
            data: data
        }
    })
}

export function verify(hash) {

    return (dispatch) => {
        dispatch({type:VERIFICATION_ATTEMPT, payload: null});
        if(hash.length>0) {
            axios.get('/api/user/verify/'+hash)
                .then(response => {dispatch(verify(response.data))})
                .catch(err => {
                    console.log(err);
                    dispatch({type: VERIFICATION_FAILURE, payload: "Something went wrong. Please try again."})
                })
        } else {
            dispatch({type: VERIFICATION_FAILURE, payload: "Something went wrong. Please try again."})
        }
    }
}


export function resetPassword(first, second, hash) {
    //console.log(first,second,hash);

    return (dispatch) => {
        dispatch({type: VALIDATION_ATTEMPT});

        if(first && first === second) {
            let crypto = require('crypto');
            let passhash = crypto.createHash('sha512').update(first).digest('hex');
            let cpasshash = crypto.createHash('sha512').update(second).digest('hex');

            axios.post('/api/user/validate', {
                password: passhash,
                cpassword: cpasshash,
                hash: hash
            })
                .then(response => {
                    dispatch(passwordChange(response.data))
                })
                .catch(err => {
                    console.log(err);
                    dispatch({type: VALIDATION_FAILURE, payload: "Something went wrong. Please try again"})
                })
        } else {
            dispatch({type: VALIDATION_MISMATCH,
                payload: "Palun tee kindlaks et sisestasid kaks identset parooli!"})
        }
    }


}

export function passwordChange(data) {
    let type = data.status === "accept" ? VALIDATION_SUCCESS : VALIDATION_FAILURE;
    let payload = data.msg;
    return {
        type: type,
        payload: payload
    }
}