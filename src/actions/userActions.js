/**
 * Created by clstrfvck on 12/04/2017.
 */
import axios from "axios"


export function logIn(data) {
    if(data.status === "accept") {
        return({type: "LOG_IN_SUCCESSFUL", payload: data.data})
    } else {
        return
    }
}

export function betterLogin(id, pass) {

    return (dispatch) => {
        dispatch({type: "LOG_IN_ATTEMPT"});

        let passhash = require('crypto').createHash('sha512').update(pass).digest('hex');

        axios.post("/api/user/login", {email: id, password: passhash})
            .then(response => {
                dispatch({
                    type: "LOG_IN_SUCCESSFUL", payload: response.data.data
                })
            })
            .catch(err => {
                console.log(err.response)
                dispatch({type: "LOG_IN_FAILURE", payload: err.response.data.msg})
            })
    }

}

export function credentialChange(key, data) {
    return {
        type: "LOGIN_CREDS",
        payload: {
            key: key,
            data: data
        }
    }
}

//set cookie on login
//check cookie on each reload / in each view
//redirect to login and devalidate redux store if cookie session is invalid or something
