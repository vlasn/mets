/**
 * Created by clstrfvck on 12/04/2017.
 */

export default function reducer( state = {
    password: "",
    cpassword: "",
    hash: "",
    loading: false,
    error: null,
    navigateToRoot: false,
    verified: false
}, action) {
    switch(action.type) {
        case "VALIDATION_CREDS" : {
            let allowedKeys = ["password", "cpassword", "hash"];
            if(allowedKeys.indexOf(action.payload.key) >= 0) {
                return {...state, [action.payload.key]: action.payload.data}
            }
            else break
        }
        case "VERIFICATION_ATTEMPT" : {
            return{...state, verified: false, navigateToRoot: false}
        }
        case "VERIFICATION_SUCCESS" : {
            return{...state, verified: true}
        }
        case "VERIFICATION_FAILURE" : {
            return{...state, verified: false, error: action.payload, navigateToRoot: true}
        }
        case "VALIDATION_ATTEMPT" : {
            return{...state, error: null, loading: true}
        }
        case "VALIDATION_SUCCESS" : {
            return {...state, loading: false, error: null, password: null, cpassword: null, navigateToRoot: true}
        }
        case "VALIDATION_FAILURE" : {
            return {...state, loading: false, error: action.payload}
        }
        case "VALIDATION_MISMATCH" : {
            return {...state, loading: false, error: action.payload}
        }
        default: {
            return {
                ...state
            }
        }
    }
}