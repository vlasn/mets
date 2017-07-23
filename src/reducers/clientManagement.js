import { CARGO_PAGES_RECEIVED } from "../components/Contracts/contractActions"

export default function reducer( state = {
    contracts: [],
    searchRequired: false

}, action) {

    switch(action.type) {
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