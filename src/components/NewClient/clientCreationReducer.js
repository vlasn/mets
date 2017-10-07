/**
 * Created by clstrfvck on 23/07/2017.
 */
import * as actionTypes from "./clientCreationActions"

export default function reducer( state = {
    activeTab: 'privatePerson',
    loading: false,
    submitted: false,
    error: false,
    details: {
        name: "",
        idNumber: "",
        documentNumber: "",
        companyName: "",
        companyId: "",
        email: "",
        phone: "",
        vatDutyNumber: "",
        contact: "",
        address: "",
    }
}, action) {

    switch(action.type) {
        case actionTypes.CREATION_CHANGE_PERSON_TYPE : {
            return {...state, activeTab: action.payload}
        }
        case actionTypes.CREATION_ATTEMPT : {
            return {...state, loading: true, submitted: false, error: false}
        }
        case actionTypes.CREATION_SUCCESS : {
            return {...state, loading: false, submitted: true, error: false}
        }
        case actionTypes.CREATION_FAILURE : {
            return {...state, loading: false, submitted: false, error:action.payload}
        }
        case actionTypes.CREATION_CHANGE_FIELD_VALUE : {
            if(state.details.hasOwnProperty(action.payload.key)){
                return {...state,
                    details:{
                        ...state.details,
                        [action.payload.key]: action.payload.value
                    }
                }
            } else {
                console.log('??');
                return {...state}
            }
        }


        default: return state
    }
}