/**
 * Created by clstrfvck on 09/06/2017.
 */
import axios from 'axios'
import { session } from "../utils/Utilities"

export function toggleDropdown(currentlyOpen) {
    return({type: "MAIN_DROPDOWN_TOGGLE", payload: !currentlyOpen})
}

export function search(opts) {
    return (dispatch) => {
        dispatch({type: "SEARCH_TRIGGERED"});
        axios.get(
            `/api/contracts/filter?cadastre=${opts.searchTerm}&metsameister=${opts.personFilterOption}&status=${opts.statusFilterOption}`,
            {
                ...session()
            })
            .then(response => {
                console.log("action:", response)
                if(response.data.status==='accept') {
                    dispatch({type: "SEARCH_COMPLETE", payload: response.data.data})
                } else {
                    dispatch({type: "SEARCH_FAILED", payload: response.data.msg})
                }
            })
            .catch(console.log)
    }
}
