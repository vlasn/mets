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