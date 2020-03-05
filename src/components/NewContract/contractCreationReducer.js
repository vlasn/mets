import * as actionTypes from "./contractCreationActions"

const defaultState = {
    loading: false,
    submitted: false,
    searchResults: [],
    representatives: [{ key: "first", name: "", id: ""}],
    details: {
        property: {
            name: "",
            cadastreId: ""
        },
        projectManager: "", //projektijuht
        foreman: "", //metsameister
        logging: null,
        timberTransport: null,
        wasteTransport: null,
    },
    documents: {
        contracts: [],
        forestNotices: [],
        other: []
    }
}

export default function reducer (state = defaultState, action) {
    switch(action.type) {

        case actionTypes.CONTRACT_CREATION_RESET : {
            return defaultState
        }
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

        case actionTypes.CONTRACT_SUBMIT_SUCCESS: {
          return { ...state, submitted: true, loading: false }
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

        case actionTypes.CONTRACT_FIELD_CHANGE : {
            if (state.details.hasOwnProperty(action.key) ||
                action.key === 'name' ||
                action.key === 'cadastreId' )
            {
                switch(action.key) {
                    case "name" : {
                        return {
                            ...state,
                            details: {
                                ...state.details,
                                property: {
                                    ...state.details.property,
                                    "name": action.value
                                }
                            }
                        }
                    }
                    case "cadastreId" : {
                        return {
                            ...state,
                            details: {
                                ...state.details,
                                property: {
                                    ...state.details.property,
                                    "cadastreId": action.value
                                }
                            }
                        }
                    }
                    default: {
                        return {
                            ...state,
                            details: {
                                ...state.details,
                                [action.key]: action.value
                            }
                        }
                    }
                }

            } else {
                return state
            }
        }

        case actionTypes.CONTRACT_ADD_FILE : {
            if(state.documents.hasOwnProperty(action.fileType)) {
                return {
                    ...state,
                    documents: {
                        ...state.documents,
                        [action.fileType]: [...state.documents[action.fileType], Object.assign(action.file, {key: action.key})]
                    }
                }

            } else {
                return state
            }
        }

        case actionTypes.CONTRACT_REMOVE_FILE : {
            return {
                ...state,
                documents: Object.keys(state.documents)
                    .reduce(
                        (acc,val) => {
                            acc[val] = state.documents[val].filter(file => file.key !== action.key)
                            return acc
                        }
                        ,{}
                    )
            }
        }

        default: return { ...state }
    }
}