/**
 * Created by clstrfvck on 18/06/2017.
 */

export default function reducer( state = {
    loading: false,
    conflictsResolved: false,
    imports: [],
    foundOptionsByKeys: {},
    mismatches: {},
    matches: [],
    meta: {
        _id: "",
        matches: 0,
        mismatches: 0,
    },
    currentlyBeingEdited: false,
    currentlyEditedOpts: {
        _id: false,
    }
}, action) {
    switch(action.type) {
        case "PRICELIST_LOADING" : {
            return {
                ...state,
                loading: action.payload,
            }
        }
        case "PRICELIST_MISMATCHES" : {
            let newMismatches = action.payload.data.unmatched.reduce((acc, val)=>{ acc[val._id] = val; return acc },{})
            return {
                ...state,
                mismatches: newMismatches,
                meta: {
                    _id: action.payload._id,
                    matches: action.payload.data.matched.length,
                    mismatches: action.payload.data.unmatched.length,
                }
            }
        }

        case "PRICELIST_SELECT_EDITABLE" : {
            if(state.mismatches.hasOwnProperty(action.payload)) {
                return {
                    ...state,
                    currentlyBeingEdited: action.payload,
                    currentlyEditedOpts : {
                        ...editableKeys
                    },
                    okToSubmitBundle: false
                }
            } else {
                return {...state}
            }
        }
        case "PRICEFORM_UPDATE_KEYS" : {

            return {
                ...state,
                foundOptionsByKeys: {
                    ...state.foundOptionsByKeys,
                    [action.payload.key]: [...action.payload.options],
                },
            }
        }

        case "PRICEFORM_EDITS_BUNDLE" : {

            if(state.currentlyEditedOpts._id === action.payload._id){
                return {
                    ...state,
                    currentlyEditedOpts: {
                        ...state.currentlyEditedOpts,
                        [action.payload.key]: action.payload.value
                    },
                }
            } else {
                return {
                    ...state,
                    currentlyEditedOpts: {
                        ...state.currentlyEditedOpts,
                        _id: action.payload._id,
                        [action.payload.key]: action.payload.value
                    },
                }
            }

        }

        case "PRICELIST_MATCH_CONFIRMED" : {
            //Had issues reducing object by it's keys, so hello ugly es5 syntax
            let shCopy = Object.assign({}, state.mismatches)

            delete shCopy[action.payload]

            return {
                ...state,
                matches: [...state.matches, action.payload],
                mismatches: shCopy
            }
        }

        case "PRICELIST_IMPORT_HISTORY" : {
            return{
                ...state,
                imports: action.payload
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
}

import { cellKeys } from "../components/presentational/PriceListTable/PriceListForm"
let editableKeys = Object.keys(cellKeys).reduce((acc,val)=>{acc[cellKeys[val]] = false; return acc},{})
