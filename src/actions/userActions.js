/**
 * Created by clstrfvck on 12/04/2017.
 */

export function logIn(data) {
    if(data.status === "accept") {
        return({type: "LOG_IN_SUCCESSFUL", payload: data.data})
    } else {
        return({type: "LOG_IN_FAILED", payload: data.msg})
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
