/**
 * Created by clstrfvck on 12/04/2017.
 */

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
        case "VALIDATION_CREDS" : {
            let allowedKeys = ["password", "cpassword", "hash"];
            if (allowedKeys.indexOf(action.payload.key) >= 0) {
                return {...state, [action.payload.key]: action.payload.data}
            }
            else break
        }
        case "VERIFICATION_ATTEMPT" : {
            return{...state, verified: false, navigateToRoot: false, validationError: null}
        }
        case "VERIFICATION_SUCCESS" : {
            return{...state, verified: true}
        }
        case "VERIFICATION_FAILURE" : {
            return{...state, verified: false, validationError: action.payload, navigateToRoot: true}
        }
        case "VALIDATION_ATTEMPT" : {
            return{...state, validationError: null, loading: true}
        }
        case "VALIDATION_SUCCESS" : {
            return {...state, loading: false, validationError: null, password: null, cpassword: null, navigateToRoot: true}
        }
        case "VALIDATION_FAILURE" : {
            return {...state, loading: false, validationError: action.payload}
        }
        case "VALIDATION_MISMATCH" : {
            return {...state, loading: false, validationError: action.payload}
        }
        default: {
            return {
                ...state
            }
        }
    }
}