/**
 * Created by clstrfvck on 18/06/2017.
 */

export default function reducer( state = {
    loading: false,
    conflictsResolved: false,
    foundOptionsByKeys: {},
    mismatches: {},
    currentlyBeingEdited: false
}, action) {
    switch(action.type) {
        case "PRICELIST_LOADING" : {
            return {
                ...state,
                loading: action.payload
            }
        }

        case "PRICELIST_MISMATCHES" : {
            let newMismatches = action.payload.reduce((acc, val)=>{ acc[val._id] = val; return acc },{})
            return {
                ...state,
                mismatches: newMismatches
            }
        }

        case "PRICELIST_SELECT_EDITABLE" : {
            if(state.mismatches.hasOwnProperty(action.payload)) {
                return {
                    ...state,
                    currentlyBeingEdited: action.payload
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
                    [action.payload.key]: [...action.payload.options]
                }
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
}