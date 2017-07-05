import axios from "axios"
import { session } from "../../../Utilities" //{...session()}

export const CARGO_PAGES_LOADING = "CARGO_PAGES_LOADING"
export const CARGO_PAGES_RECEIVED = "CARGO_PAGES_RECEIVED"
export const CARGO_PAGES_ERROR = "CARGO_PAGES_ERROR"

export function fetchCargoPages(cadastres = [], forId) {

    return (dispatch) => {
        dispatch({
            type: CARGO_PAGES_LOADING,
        })
        axios.get(`/api/reports/fetchCargoPages?cadastreid=${cadastres.join(",")}`, {...session()})
            .then(({data}) => {
                if(data.status === 'accept') {
                    console.log(data.data)
                    dispatch({
                        type: CARGO_PAGES_RECEIVED,
                        payload: data.data,
                        forId: forId
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: CARGO_PAGES_ERROR,
                    payload: error
                })
            })
    }
}