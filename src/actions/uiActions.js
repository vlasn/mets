/**
 * Created by clstrfvck on 09/06/2017.
 */
import axios from 'axios'

export function toggleDropdown(currentlyOpen, loggedIn) {
    let payload = !currentlyOpen && loggedIn ? true : false
    return({type: "MAIN_DROPDOWN_TOGGLE", payload: payload})
}

export function search(opts) {
    return (dispatch) => {
        dispatch({type: "SEARCH_TRIGGERED"});
        axios.get(`/api/contract/fetch?cadastre=${opts.searchTerm}&metsameister=${opts.personFilterOption}&status=${opts.statusFilterOption}`)
            .then(({data}) => {
                if(data.status==='accept') {
                    dispatch({type: "SEARCH_COMPLETE", payload: data.data})
                } else {
                    dispatch({type: "SEARCH_FAILED", payload: data.msg})
                }
            })
            .catch(console.log)
    }
}

export function fetchCargoPages(cadastres = [], forId) {

    return (dispatch) => {
        console.log('fetching for cadastres '+cadastres.toString(),forId)
        dispatch({
            type: "CARGO_PAGES_FETCHING",
            payload: true
        })
        axios.get(`/api/import/fetchCargoPages?cadastreid=${cadastres.join(",")}`)
            .then(({data}) => {
                if(data.status === 'accept') {
                    dispatch({
                        type: "CARGO_PAGES_FETCHING",
                        payload: false
                    })
                    console.log(data.data)
                    dispatch({
                        type: "CARGO_PAGES_RECEIVED",
                        payload: data.data,
                        forId: forId
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: "CARGO_PAGES_ERROR",
                    payload: error
                })
            })
    }
}