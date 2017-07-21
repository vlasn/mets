/**
 * Created by clstrfvck on 12/04/2017.
 */

import * as actionTypes from "./loginActions"

export default function reducer( state = {
    email: "",
    password: "",
    loading: false,
    loggedIn: false,
    error: null,
    details: {},
    navigateToRoot: false,
    roles: []
}, action) {
    switch(action.type) {
        case actionTypes.LOG_IN_ATTEMPT: {
            return { ...state, loading:true, error: false}
        }
        case actionTypes.LOG_IN_FAILURE: {
            return { ...state, loading: false, error: action.payload}
        }
        case actionTypes.LOG_IN_SUCCESSFUL: {
            console.log("login successful!");
            return { ...state, loading: false, loggedIn: true, error: null, password: null, details: action.payload, navigateToRoot:true}
        }
        case "LOG_OUT": {
            return {loading: false, loggedIn: false, error: null, details: {}}
        }
        case actionTypes.LOGIN_CREDS : {
            let allowedKeys = ["email", "password"];
            if(allowedKeys.indexOf(action.payload.key) >= 0) {
                return {...state, [action.payload.key]: action.payload.data}
            }
            else break
        }
        default: {
            return {
                ...state
            }
        }
    }
}