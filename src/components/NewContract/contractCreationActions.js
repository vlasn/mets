import axios from "axios"
import { session, uuid } from "../../Utilities"
export const CONTRACT_PERSON_SEARCH_LOADING = "CONTRACT_PERSON_SEARCH_LOADING"
export const CONTRACT_PERSON_SEARCH_RESULTS = "CONTRACT_PERSON_SEARCH_RESULTS"
export const CONTRACT_PERSON_CLEAR_RESULTS = "CONTRACT_PERSON_CLEAR_RESULTS"
export const CONTRACT_ADD_REP = "CONTRACT_ADD_REP"
export const CONTRACT_REMOVE_REP = "CONTRACT_REMOVE_REP"
export const CONTRACT_UPDATE_REP = "CONTRACT_UPDATE_REP"
export const CONTRACT_FIELD_CHANGE = "CONTRACT_FIELD_CHANGE"
export const CONTRACT_CREATION_RESET = "CONTRACT_CREATION_RESET"
export const CONTRACT_UPLOAD_FILE = "CONTRACT_UPLOAD_FILE"
export const CONTRACT_REMOVE_FILE = "CONTRACT_REMOVE_FILE"


export const fetchPersonDropdownOptions = term => {
    return dispatch => {
        dispatch({type: CONTRACT_PERSON_SEARCH_LOADING, loading: true})
        axios.get("/api/users?key=nimi,isikukood&value="+term, session())
            .then(response => {
                dispatch({type: CONTRACT_PERSON_SEARCH_LOADING, loading: false})
                if(response.data.data.length>0) {
                    let results = response.data.data.map(match => ({
                        id: match._id,
                        name: match.personal_data.nimi,
                        identityCode: match.personal_data.isikukood
                    }))
                    console.log(results)
                    dispatch({ type: CONTRACT_PERSON_SEARCH_RESULTS, results})
                } else {
                    dispatch({ type: CONTRACT_PERSON_CLEAR_RESULTS })
                }

            })
            .catch(console.log)
    }
}

export const onDefaultFieldChange = (key, value) => {
    return { type: CONTRACT_FIELD_CHANGE, key, value }
}

export const addRepresentative = () => {
    return { type: CONTRACT_ADD_REP, key: uuid() }
}

export const removeRepresentative = key => {
    return { type: CONTRACT_REMOVE_REP, key }
}

export const updateRepresentative = (key, name, id) => {
    return { type: CONTRACT_UPDATE_REP, key, name, id }
}
export const resetContractCreation = () => ({type: CONTRACT_CREATION_RESET})

export const uploadFile = (file, fileType)  => ({type: CONTRACT_UPLOAD_FILE, file: file.item(0), fileType})

export const removeFile = fileName => ({type: CONTRACT_REMOVE_FILE, fileName})