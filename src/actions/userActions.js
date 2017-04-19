/**
 * Created by clstrfvck on 12/04/2017.
 */

import axios from "axios"

export function logIn(email, pass) {
    console.log("login actionist: ",email,pass);
    axios.post('/api/auth/login', {
        body: JSON.stringify({
            email: email,
            password: pass
        })
    })
        .then(response => console.log(response))
        .catch(error => console.log(`Something's gone wrong! ${error}`));


    let type = "LOG_IN_SUCCESSFUL",
        payload = {
            name: "Testiv Kasutaja",
            email: "testmets@gmail.com",
            phone: "58039222"
        };

    return {
        type: type,
        payload: payload
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
    console.log("passwordChange triggered")
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