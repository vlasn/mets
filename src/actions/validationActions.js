/**
 * Created by clstrfvck on 12/04/2017.
 */

import axios from "axios"

export function credentialChange(key, data) {
    return {
        type: "VALIDATION_CREDS",
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