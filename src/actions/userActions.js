/**
 * Created by clstrfvck on 12/04/2017.
 */

import axios from "axios"

export function logIn(email, pass) {
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