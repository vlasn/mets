/**
 * Created by clstrfvck on 25/06/2017.
 */

//To be used as soon as I modularize clientManagement reducer

export const TOGGLE_FILTER_DROPDOWN = "TOGGLE_FILTER_DROPDOWN"
export const PERSON_FILTER_OPTION = "PERSON_FILTER_OPTION"
export const STATUS_FILTER_OPTION = "STATUS_FILTER_OPTION"
export const FILTER_SEARCH_TERM = "FILTER_SEARCH_TERM"

export function toggleDropdown(label) {
    console.log('toggled '+label)
    return {
        type: TOGGLE_FILTER_DROPDOWN, 
        payload: label
    }

}
export function personFilterOption(person) {
    return {
        type: PERSON_FILTER_OPTION, 
        payload: person
    }
}
export function statusFilterOption(status) {
    return {
        type: STATUS_FILTER_OPTION, 
        payload: status
    }
}
export function updateSearchTerm(term) {
    return {
        type: FILTER_SEARCH_TERM, 
        payload: term
    }
}

export function queueSearch() {
    return {
        type: "SEARCH_QUEUED"
    }
}