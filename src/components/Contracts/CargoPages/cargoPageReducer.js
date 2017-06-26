/**
 * Created by clstrfvck on 26/06/2017.
 */

import * as actionTypes from "./cargoPageActions"


export default function reducer( state = {

    cargoPages: {},
    searchRequired: false,
    loading: false,
    error: false

}, action) {

    switch(action.type) {
        case actionTypes.CARGO_PAGES_RECEIVED : {
            return({
                ...state,
                loading: false,
                cargoPages: {
                    ...state.cargoPages,
                    [action.forId]: action.payload
                }
            })
        }

        case actionTypes.CARGO_PAGES_LOADING : {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case actionTypes.CARGO_PAGES_ERROR : {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
}