/**
 * Created by clstrfvck on 12/04/2017.
 */
import axios from "axios"
import Api from "../../utils/Api"

export const LOG_IN_SUCCESSFUL = "LOG_IN_SUCCESSFUL"
export const LOG_IN_ATTEMPT = "LOG_IN_ATTEMPT"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"
export const LOGIN_CREDS = "LOGIN_CREDS"
export const LOG_OUT = "LOG_OUT"


export function login(id, pass) {

    return (dispatch) => {
        dispatch({type: LOG_IN_ATTEMPT});

        let passhash = require('crypto').createHash('sha512').update(pass).digest('hex');

        Api("POST","/auth/login", {email: id, password: passhash})
            .then(data => {
                if(data.token) {
                    localStorage.setItem('session', data.token)
                    dispatch({
                        type: LOG_IN_SUCCESSFUL, name: data.name
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
    return {type: LOG_OUT}
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
