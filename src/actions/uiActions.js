/**
 * Created by clstrfvck on 09/06/2017.
 */
import axios from 'axios'
import { session } from "../utils/Utilities"
import Api from "../utils/Api"

export function toggleDropdown(currentlyOpen) {
    return({type: "MAIN_DROPDOWN_TOGGLE", payload: !currentlyOpen})
}

export function search(opts) {
    return (dispatch) => {
        dispatch({type: "SEARCH_TRIGGERED"});
        Api(
            "GET",
            `/contracts?term=${opts.searchTerm}&foreman=${opts.personFilterOption}&status=${opts.statusFilterOption}`
        )
            .then(data => {
                console.log("Search: ", data)
                dispatch({type: "SEARCH_COMPLETE", payload: data})
            })
            .catch(e => {
                dispatch({ type: "SEARCH_FAILED", payload: response.data.msg })
                dispatch({ type: "GLOBAL_ERROR", text: "Otsing ei õnnestunud" })
            })
    }
}
