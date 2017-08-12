import * as actionTypes from "./contractCreationActions"

export default function reducer (state = {
    loading: false,
    searchResults: [],
    representatives: [{ key: "first", name: "", id: ""}]
}, action) {
    switch(action.type) {
        case actionTypes.CONTRACT_PERSON_SEARCH_LOADING : {
            return {
                ...state,
                loading: action.loading,
            }
        }

        case actionTypes.CONTRACT_PERSON_SEARCH_RESULTS : {
            return {
                ...state,
                searchResults: action.results
            }
        }

        case actionTypes.CONTRACT_PERSON_CLEAR_RESULTS : {
            return { ...state, searchResults: [] }
        }

        case actionTypes.CONTRACT_ADD_REP : {
            return { ...state, representatives: [...state.representatives, { key: action.key, name: "", id: "" }] }
        }

        case actionTypes.CONTRACT_REMOVE_REP : {
            return {
                ...state,
                representatives: state.representatives.filter(rep => rep.key != action.key)
            }
        }

        case actionTypes.CONTRACT_UPDATE_REP : {
            return {
                ...state,
                representatives: state.representatives.map(rep => (
                    rep.key === action.key ?
                        { ...rep, name: action.name, id: action.id } :
                        rep
                    )
                )
            }
        }

        default: return { ...state }
    }
}