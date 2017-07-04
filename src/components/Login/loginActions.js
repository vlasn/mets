/**
 * Created by clstrfvck on 12/04/2017.
 */
import axios from "axios"

export const LOG_IN_SUCCESSFUL = "LOG_IN_SUCCESSFUL"
export const LOG_IN_ATTEMPT = "LOG_IN_ATTEMPT"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"
export const LOGIN_CREDS = "LOGIN_CREDS"
export const LOG_OUT = "LOG_OUT"


export function login(id, pass) {

    return (dispatch) => {
        dispatch({type: LOG_IN_ATTEMPT});

        let passhash = require('crypto').createHash('sha512').update(pass).digest('hex');

        axios.post("/api/auth", {email: id, password: passhash})
            .then(response => {
                if(response.data.data.token) {
                    localStorage.setItem('session',response.data.data.token)
                    dispatch({
                        type: LOG_IN_SUCCESSFUL, payload: response.data.data.personal_data
                    })
                } else {
                    return Promise.reject("Sisselogimine ei õnnestunud!")
                }

            })
            .catch(err => {
                console.log(err.response)
                dispatch({type: LOG_IN_FAILURE, payload: err.response.data.msg})
            })
    }
}

export function logOut() {
    localStorage.clear()
    return({
        type: LOG_OUT
    })
}

export function credentialChange(key, data) {
    return {
        type: LOGIN_CREDS,
        payload: {
            key: key,
            data: data
        }
    }
}

//TODO:
//set cookie on login
//check cookie on each reload / in each view
//redirect to login and devalidate redux store if cookie session is invalid or something
