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
    dispatch({
        type: TOGGLE_FILTER_DROPDOWN, 
        payload: label
    })

}
export function personFilterOption(person) {
    dispatch({
        type: PERSON_FILTER_OPTION, 
        payload: person
    })
}
export function statusFilterOption(status) {
    dispatch({
        type: STATUS_FILTER_OPTION, 
        payload: status
    })
}
export function updateSearchTerm(term) {
    dispatch({
        type: FILTER_SEARCH_TERM, 
        payload: term
    })
}