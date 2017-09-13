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
export const CONTRACT_ADD_FILE = "CONTRACT_ADD_FILE"
export const CONTRACT_REMOVE_FILE = "CONTRACT_REMOVE_FILE"

export const CONTRACT_SUBMIT_ATTEMPT = "CONTRACT_SUBMIT_ATTEMPT"
export const CONTRACT_SUBMIT_SUCCESS = "CONTRACT_SUBMIT_SUCCESS"


export const fetchPersonDropdownOptions = term => {
    return dispatch => {
        dispatch({type: CONTRACT_PERSON_SEARCH_LOADING, loading: true})
        axios.get("/api/users/search?key=nimi,isikukood&value="+term, session())
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

export const attemptNewContractSubmit = (details, reps, files) => {
    //console.log(details, reps, files)
    return dispatch => {
        dispatch({type: CONTRACT_SUBMIT_ATTEMPT})
        let fd = new FormData()
        Object.keys(details)
          .forEach(row => fd.append(row, details[row]))
        Object.keys(reps)
          .forEach((rep, index) => fd.append("esindajad", rep.id))
        Object.keys(files)
          .forEach(fileKey =>
            files[fileKey]
              .forEach(file => fd.append(fileKey, file))
          )

        console.log(fd.entries().next())
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

export const uploadFile = (file, fileType)  => ({type: CONTRACT_ADD_FILE, file: file.item(0), fileType})

export const removeFile = fileName => ({type: CONTRACT_REMOVE_FILE, fileName})