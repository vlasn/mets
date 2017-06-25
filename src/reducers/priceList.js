/**
 * Created by clstrfvck on 18/06/2017.
 */

import * as actionTypes from "../actions/priceListActions"

export default function reducer( state = {
    loading: false,
    conflictsResolved: false,
    //redirectToResolve: false,
    //imports: [],
    foundOptionsByKeys: {},
    currentlyEditedName: '',
    currentParent: 0,
    mismatches: {},
    matches: [],
    meta: {
        _id: "",
        matches: 0,
        mismatches: 0,
        filename: ''
    },
    currentlyBeingEdited: false,
    allowNewPriceListItem: false,
    currentlyEditedOpts: {
        _id: false,
    }
}, action) {
    switch(action.type) {
        case actionTypes.PRICELIST_LOADING : {
            return {
                ...state,
                loading: action.payload,
            }
        }
        case actionTypes.PRICELIST_MISMATCHES : {
            console.log('mm:',action.payload);
            let newMismatches = action.payload.unmatched.reduce((acc, val)=>{ acc[val._id] = val; return acc },{})
            return {
                ...state,
                mismatches: newMismatches,
                meta: {
                    _id: action.payload._id,
                    matches: action.payload.matched.length,
                    mismatches: action.payload.unmatched.length,
                    name: action.payload.filename || 'Failinimi puudub'
                },
                //redirectToResolve: true
            }
        }

        case actionTypes.PRICELIST_SELECT_EDITABLE : {
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
        case actionTypes.PRICEFORM_UPDATE_KEYS : {

            return {
                ...state,
                foundOptionsByKeys: {
                    ...state.foundOptionsByKeys,
                    [action.payload.key]: [...action.payload.options],
                },
            }
        }

        case actionTypes.PRICEFORM_EDITS_BUNDLE : {

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

        case actionTypes.PRICELIST_MATCH_CONFIRMED : {
            //Had issues reducing object by it's keys, so hello ugly es5 syntax
            let shCopy = Object.assign({}, state.mismatches)

            delete shCopy[action.payload]

            return {
                ...state,
                matches: [...state.matches, action.payload],
                mismatches: shCopy,
            }
        }

        case actionTypes.PRICELIST_MATCH_REJECTED : {
            return {
                ...state,
                    allowNewPriceListItem: true
            }
        }

        case actionTypes.PRICELIST_ADD_SUCCESSFUL : {
            let shCopy = Object.assign({}, state.mismatches)
            delete shCopy[state.currentlyBeingEdited]
            return {
                ...state,
                currentlyBeingEdited: false,
                mismatches: action.mismatches,
                allowNewPriceListItem: false
            }
        }

        case actionTypes.TRANSMIT_PARENT : {
            return {
                ...state,
                currentParent: action.payload
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
}

import { cellKeys } from "../components/ResolveImport/PriceListForm"
let editableKeys = Object.keys(cellKeys).reduce((acc,val)=>{acc[cellKeys[val]] = false; return acc},{})
