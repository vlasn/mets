import axios from "axios"
import { session } from "../../Utilities"

export const UPDATE_CONTRACT_ROW_ATTEMPT = "UPDATE_CONTRACT_ROW_ATTEMPT"
export const UPDATE_CONTRACT_ROW_SUCCESS = "UPDATE_CONTRACT_ROW_SUCCESS"
export const UPDATE_CONTRACT_ROW_ERROR = "UPDATE_CONTRACT_ROW_ERROR"
export const REFRESH_CONTRACT = "REFRESH_CONTRACT"


export function updateContractRow (contractId, key, value) {

    return (dispatch) => {
        dispatch({type: UPDATE_CONTRACT_ROW_ATTEMPT,payload: {key: key}})
        axios.put('/api/contract/update/'+contractId, {
            key: key,
            value: value,
        },{
            ...session()
        })
            .then(({data}) => {
                if(data.status==='accept') {
                    dispatch({type: UPDATE_CONTRACT_ROW_SUCCESS, payload: {key: key}})
                    dispatch({type: REFRESH_CONTRACT, payload: data.data})
                } else {
                    dispatch({type: UPDATE_CONTRACT_ROW_ERROR, payload: {key: key}})
                }
            })
            .catch(console.log) //TODO - needs error handling!
    }
}
