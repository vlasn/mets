import axios from "axios"

import data from "./exampleResponses/exampleImportResult"

export const getOptions = (fieldKey) => {
    return axios.get('/api/pricelist/')
}

export const fauxGetOptions = (fieldKey) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                data: [
                    'MA',
                   'KU',
                   'HB',
                    'LM',
                    'KU/MA',
                    'KS',
                    'Okaspuu',
                    'Lehtpuu',
                    'LV'
                ]
            })
        }, 500)
    })
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