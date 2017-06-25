/**
 * Created by clstrfvck on 12/04/2017.
 */

import * as actionTypes from "./validationActions"

export default function reducer( state = {
    password: "",
    cpassword: "",
    hash: "",
    loading: false,
    validationError: null,
    navigateToRoot: false,
    verified: false
}, action) {
    switch(action.type) {
        case actionTypes.VALIDATION_CREDS : {
            let allowedKeys = ["password", "cpassword", "hash"];
            if (allowedKeys.indexOf(action.payload.key) >= 0) {
                return {...state, [action.payload.key]: action.payload.data}
            }
            else break
        }
        case actionTypes.VERIFICATION_ATTEMPT : {
            return{...state, verified: false, navigateToRoot: false, validationError: null}
        }
        case actionTypes.VERIFICATION_SUCCESS : {
            return{...state, verified: true}
        }
        case actionTypes.VERIFICATION_FAILURE : {
            return{...state, verified: false, validationError: action.payload, navigateToRoot: true}
        }
        case actionTypes.VALIDATION_ATTEMPT : {
            return{...state, validationError: null, loading: true}
        }
        case actionTypes.VALIDATION_SUCCESS : {
            return {...state, loading: false, validationError: null, password: null, cpassword: null, navigateToRoot: true}
        }
        case actionTypes.VALIDATION_FAILURE : {
            return {...state, loading: false, validationError: action.payload}
        }
        case actionTypes.VALIDATION_MISMATCH : {
            return {...state, loading: false, validationError: action.payload}
        }
        default: {
            return {
                ...state
            }
        }
    }
}