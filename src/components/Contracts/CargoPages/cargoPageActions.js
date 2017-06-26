import axios from "axios"

export const CARGO_PAGES_LOADING = "CARGO_PAGES_LOADING"
export const CARGO_PAGES_RECEIVED = "CARGO_PAGES_RECEIVED"
export const CARGO_PAGES_ERROR = "CARGO_PAGES_ERROR"

export function fetchCargoPages(cadastres = [], forId) {

    return (dispatch) => {
        console.log('fetching for cadastres '+cadastres.toString(),forId)
        dispatch({
            type: CARGO_PAGES_LOADING,
        })
        axios.get(`/api/import/fetchCargoPages?cadastreid=${cadastres.join(",")}`)
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