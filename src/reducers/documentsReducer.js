/**
 * Created by clstrfvck on 12/04/2017.
 */

export default function reducer( state={
    loading: false,
    error: null,
    documents: {}
}, action) {
    switch(action.type) {
        case "FETCH_DOCUMENTS":{
            return {...state, loading: true}
        }
        case "FETCH_DOCUMENTS_FAILED": {
            return {...state, loading: false, error: action.payload}
        }
        case "FETCH_DOCUMENTS_SUCCESSFUL": {
            return {...state, loading: false, documents: action.payload, error: null}
        }
        default: {
            return {
                ...state
            }
        }
    }
}