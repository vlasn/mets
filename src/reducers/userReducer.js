/**
 * Created by clstrfvck on 12/04/2017.
 */

export default function reducer( state = {
    loading: false,
    loggedIn: false,
    error: null,
    details: {}
}, action) {
    switch(action.type) {
        case "LOG_IN_ATTEMPT": {
            return { ...state, loading:true}
        }
        case "LOG_IN_FAILED": {
            return { ...state, loading: false, error: action.payload}
        }
        case "LOG_IN_SUCCESSFUL": {
            return { ...state, loading: false, loggedIn: true, error: null, details: action.payload}
        }
        case "LOG_OUT": {
            return {loading: false, loggedIn: false, error: null, details: {}}
        }
        default: {
            return {
                ...state
            }
        }
        //Further cases to follow in case user decides to change any of their details online.
    }
}