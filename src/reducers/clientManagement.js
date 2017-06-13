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
        }
    }
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
        default: {
            return {
                ...state
            }
        }
    }
}