/**
 * Created by clstrfvck on 12/04/2017.
 */

import axios from "axios"

export function logIn(data) {
    if(data.status === "accept") {
        //simulating login latency of 1s to test
        return({type: "LOG_IN_SUCCESSFUL", payload: data.data})
    } else {
        console.log(data);
        return({type: "LOG_IN_FAILED", payload: data.data.msg})
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

export function passwordChange(first, second, hash, email) {
    let type = "",
        payload = {};

    if(first && first === second) {
        axios.post('/api/auth/validate', {
            body: JSON.stringify({
                password: first,
                //Why is the hash expected to be nested inside an object in the API endpoint?
                hash: {
                    hash: hash
                },
                /*
                    Why is e-mail an expected argument in the validation endpoint if we're validating the hash against an User document?
                    When and where does the user enter it?
                 */
                email: email
            })
        })
            .then(response => {
                console.log(response);
                type = "VALIDATION_SUCCESS";
                //
                payload = response.data.data.msg
            })
            .catch(error => {
                console.log(`An error has occurred: ${error}`);
                type = "VALIDATION_FAILURE";
                //look into what gets thrown in response!
                payload = error.data.data.msg
            })
    } else {
        type = "VALIDATION_MISMATCH";
        payload = "Palun tee kindlaks et sisestasid kaks identset parooli!"
    }
    return {
        type: type,
        payload: payload
    }
}