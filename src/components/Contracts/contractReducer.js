import * as actionTypes from "./contractActions"

export default function reducer(state = {
    contractRowLoading: {
        created_timestamp: false,
        projektijuht: false,
        metsameister: false,
        esindajad: false,
        katastritunnused: false,
        raie_teostamine: false,
    }
}, action){

    switch(action.type) {
        case actionTypes.UPDATE_CONTRACT_ROW_ATTEMPT: {
            if(state.contractRowLoading.hasOwnProperty(action.payload.key)){
                return({...state, contractRowLoading:{
                    ...state.contractRowLoading,
                    [action.payload.key]: true
                }})
            } else {
                console.log('editContract error: ', action)
                return {...state}
            }
        }

        case actionTypes.UPDATE_CONTRACT_ROW_SUCCESS: {
            if(state.contractRowLoading.hasOwnProperty(action.payload.key)){
                return({...state,
                    contractRowLoading:{
                        ...state.contractRowLoading,
                        [action.payload.key]: false,
                    }
                })
            } else {
                console.log('editContract error: ', action)
                return {...state}
            }
        }

        case actionTypes.UPDATE_CONTRACT_ROW_ERROR: {
            if(state.contractRowLoading.hasOwnProperty(action.payload.key)){
                return({...state,
                    contractRowLoading:{
                        ...state.contractRowLoading,
                        [action.payload.key]: 'error',
                    }
                })
            } else {
                console.log('editContract error: ', action)
                return {...state}
            }
        }

        default : {
            return {
                ...state
            }
        }
    }

}