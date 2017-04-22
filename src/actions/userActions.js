/**
 * Created by clstrfvck on 12/04/2017.
 */

import axios from "axios"

export function logIn(data) {
    if(data.status === "accept") {
        return({type: "LOG_IN_SUCCESSFUL", payload: data.data})
    } else {
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

export function passwordChange(data) {

    let type = data.status === "accept" ? "VALIDATION_SUCCESS" : "VALIDATION_FAILURE";
    let payload = data.data.msg

    return {
        type: type,
        payload: payload
    }
}