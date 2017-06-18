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

//set cookie on login
//check cookie on each reload / in each view
//redirect to login and devalidate redux store if cookie session is invalid or something
