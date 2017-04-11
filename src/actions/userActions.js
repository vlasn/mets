/**
 * Created by clstrfvck on 12/04/2017.
 */

import axios from "axios"

export function logIn(email, pass) {
    //Ajax to be fully implemented below:
    axios.post('/api/auth/login', {
        body: JSON.stringify({
            email: email,
            password: pass
        })
    })
        .then(response => console.log(response.data))
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

    //requires usernameChange and passwordChange, updated while typing!
}