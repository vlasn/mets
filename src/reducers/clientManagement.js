import { CARGO_PAGES_RECEIVED } from "../components/Contracts/contractActions"

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
        errors: {
            name: "",
            personalId: "",
            documentId: "",
            companyRegistration: "",
            email: "",
            vatDutyNumber: "",
            contact: "",
            address: ""
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
        case "CREATION_FIELD_ERROR":{
            return {
                ...state,
                creation: {
                    ...state.creation,
                    errors: {
                        ...state.creation.errors,
                        ...action.payload
                    }
                }
            }
        }

        case "SEARCH_COMPLETE" : {
            console.log("searchcomplete")
            console.log(action)
            return {
                ...state,
                contracts: action.payload.map(contract => ({...contract, cargoSheets: false})),
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

        case "REFRESH_CONTRACT" : {
            return({
                ...state,
                contracts: state.contracts.map(c => c._id === action.payload._id ? {...c, ...action.payload} : c)
            })
        }

        default: {
            return {
                ...state
            }
        }
    }
}