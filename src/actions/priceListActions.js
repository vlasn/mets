import axios from "axios"

import data from "./exampleResponses/exampleImportResult"

export const getOptions = (fieldKey) => {
    return (dispatch) => {
        dispatch({
            type: "PRICEFORM_FETCHING_KEY",
            payload: true
        })
        axios.get(`/api/import/fieldOpts/${fieldKey}`)
            .then(({data}) => {
                dispatch({
                    type: "PRICEFORM_FETCHING_KEY",
                    payload: false
                })
                if(data.status === 'accept' && data.data.length>0) {
                    dispatch({
                        type: "PRICEFORM_UPDATE_KEYS",
                        payload: {key: fieldKey, options: data.data.sort()}
                    })
                }
            })
            .catch(console.log)
    }
}



export const importRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRICELIST_LOADING",
            payload: true
        })
        fauxImportRequest() //axios.post....etc
            .then(({status, data})=> {
                dispatch({
                    type: "PRICELIST_LOADING",
                    payload: false
                });
                if(status == 'accept' && data.unmatched.length>0) {

                    dispatch({
                        type: "PRICELIST_MISMATCHES",
                        payload: data.unmatched
                    })
                }
            })
    }
}
export const selectEditable = (id) => {
    return (dispatch) => {
        dispatch({type: "PRICELIST_SELECT_EDITABLE", payload: id})
    }
}

const fauxImportRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(data), 1500)
    })
}