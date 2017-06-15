export default function reducer( state = {
    creation: {
        activeTab: 'privatePerson',
        loading: false,
        submitted: false,
        error: null,
        details: {
            name: "",
            personalId: "",
            documentId: "",
            companyRegistration: "",
            email: "",
            vatDutyNumber: "",
            contact: "",
            address: ""
        },
    },
    cards: {
        filter: {
            statusFilterOpen: false,
            personFilterOpen: false,
            statusFilterOption: '',
            personFilterOption: '',
            searchTerm: ''
        }
    },
    contracts: [],
    searchRequired: false

}, action) {

    switch(action.type) {
        case "CREATION_CHANGE_PERSON_TYPE" : {
            return {...state, creation:{...state.creation, activeTab: action.payload}}
        }
        case "CREATION_ATTEMPT" : {
            return {...state, creation:{...state.creation, loading: true, submitted: false}}
        }
        case "CREATION_SUCCESS" : {
            return {...state, creation:{...state.creation, loading: false, submitted: true}}
        }
        case "CREATION_FAILURE" : {
            return {...state, creation:{...state.creation, loading: false, submitted: false, error:action.payload}}
        }
        case "CREATION_CHANGE_FIELD_VALUE" : {
            if(state.creation.details.hasOwnProperty(action.payload.key)){
                return {...state,
                    creation:{...state.creation,
                        details:{
                            ...state.creation.details,
                            [action.payload.key]: action.payload.value
                    }}
                }
            } else {
                console.log('??');
                return {...state}
            }
        }
        //Filter bits
        case "TOGGLE_FILTER_DROPDOWN" : {
            return {
                ...state,
                cards: {
                    ...state.cards,
                    filter: {
                        ...state.cards.filter,
                        [action.payload+'FilterOpen']: !state.cards.filter[action.payload+'FilterOpen']
                    }
                }
            }
        }
        case "PERSON_FILTER_OPTION" : {
            return{
                ...state,
                cards: {
                    ...state.cards,
                    filter: {
                        ...state.cards.filter,
                        personFilterOption: action.payload
                    }
                }
            }
        }
        case "FILTER_SEARCH_TERM" : {
            return{
                ...state,
                cards: {
                    ...state.cards,
                    filter: {
                        ...state.cards.filter,
                        searchTerm: action.payload
                    }
                }
            }
        }

        case "STATUS_FILTER_OPTION" : {
            return{
                ...state,
                cards: {
                    ...state.cards,
                    filter: {
                        ...state.cards.filter,
                        statusFilterOption: action.payload
                    }
                }
            }
        }

        //search
        case "SEARCH_COMPLETE" : {
            return {
                ...state,
                contracts: action.payload,
                searchRequired: false
            }
        }
        case "SEARCH_TRIGGERED" : {
            return {
                ...state,
                searchRequired: false
            }
        }
        case "SEARCH_QUEUED" : {
            return {
                ...state,
                searchRequired: true
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}