import axios from "axios"
import { session, uuid } from "../../Utilities"
export const CONTRACT_PERSON_SEARCH_LOADING = "CONTRACT_PERSON_SEARCH_LOADING"
export const CONTRACT_PERSON_SEARCH_RESULTS = "CONTRACT_PERSON_SEARCH_RESULTS"
export const CONTRACT_PERSON_CLEAR_RESULTS = "CONTRACT_PERSON_CLEAR_RESULTS"
export const CONTRACT_ADD_REP = "CONTRACT_ADD_REP"
export const CONTRACT_REMOVE_REP = "CONTRACT_REMOVE_REP"
export const CONTRACT_UPDATE_REP = "CONTRACT_UPDATE_REP"

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

export const addRepresentative = () => {
    return { type: CONTRACT_ADD_REP, key: uuid() }
}

export const removeRepresentative = key => {
    return { type: CONTRACT_REMOVE_REP, key }
}

export const updateRepresentative = (key, name, id) => {
    return { type: CONTRACT_UPDATE_REP, key, name, id }
}