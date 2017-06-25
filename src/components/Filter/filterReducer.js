/**
 * Created by clstrfvck on 25/06/2017.
 */

//To be used as soon as I modularize clientManagement reducer

import * as actionTypes from "./filterActions"

export default function reducer( state = {
    statusFilterOpen: false,
    personFilterOpen: false,
    statusFilterOption: '',
    personFilterOption: '',
    searchTerm: ''
}, action) {

    switch(action.type) {

        case actionTypes.TOGGLE_FILTER_DROPDOWN : {
            return {
                ...state,
                [action.payload + 'FilterOpen']: !state.cards.filter[action.payload + 'FilterOpen']
            }
        }

        case actionTypes.PERSON_FILTER_OPTION : {
            return {
                ...state,
                personFilterOption: action.payload
            }
        }

        case actionTypes.FILTER_SEARCH_TERM : {
            return {
                ...state,
                searchTerm: action.payload
            }
        }

        case actionTypes.STATUS_FILTER_OPTION : {
            return {
                ...state,
                statusFilterOption: action.payload
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
}