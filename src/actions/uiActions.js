/**
 * Created by clstrfvck on 09/06/2017.
 */
import axios from 'axios'

export function toggleDropdown(currentlyOpen, loggedIn) {
    let payload = !currentlyOpen && loggedIn ? true : false
    return({type: "MAIN_DROPDOWN_TOGGLE", payload: payload})
}

export function search(opt) {
    return axios.get(`/api/contract/fetch?cadastre=${opt.searchTerm}&metsameister=${opt.personFilterOption}&status=${opt.statusFilterOption}`)
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