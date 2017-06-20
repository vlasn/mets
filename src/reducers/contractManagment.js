/**
 * Created by henrysavi on 16/06/17.
 */
export default function reducer( state = {
    creation: {
        loading: false,
        submitted: false,
        error: null,
        contractDetails: {
            cuts: "",
            export: "",
            cutsExport: "",
            forestMaster: "",
            propertyName: "",
            projectManager: "",
        },
        errors: {
            cuts: "",
            export: "",
            cutsExport: "",
            forestMaster: "",
            propertyName: "",
            projectManager: "",
        }
    },

}, action) {

    switch(action.type) {

        case "CONTRACT_CREATION_ATTEMPT" : {
            return {...state, creation:{...state.creation, loading: true, submitted: false}}
        }
        case "CONTRACT_CREATION_SUCCESS" : {
            return {...state, creation:{...state.creation, loading: false, submitted: true}}
        }
        case "CONTRACT_CREATION_FAILURE" : {
            return {...state, creation:{...state.creation, loading: false, submitted: false, error:action.payload}}
        }
        case "CONTRACT_CREATION_CHANGE_FIELD_VALUE" : {
            if(state.creation.contractDetails.hasOwnProperty(action.payload.key)){
                return {...state,
                    creation:{...state.creation,
                        contractDetails:{
                            ...state.creation.contractDetails,
                            [action.payload.key]: action.payload.value
                        }}
                }
            } else {
                console.log('??');
                return {...state}
            }
        }
        case "CONTRACT_CREATION_FIELD_ERROR":{
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

        default: {
            return {
                ...state
            }
        }
    }
}