/**
 * Created by clstrfvck on 25/06/2017.
 */

import axios from "axios"

export const XLSX_UPLOAD_ATTEMPT = "XLSX_UPLOAD_ATTEMPT "
export const XLSX_UPLOAD_SUCCESSFUL = "XLSX_UPLOAD_SUCCESSFUL "
export const XLSX_UPLOAD_REJECTED = "XLSX_UPLOAD_REJECTED"

export const IMPORT_HISTORY_LOADING = "IMPORT_HISTORY_LOADING "
export const IMPORT_HISTORY_ERROR = "IMPORT_HISTORY_ERROR "
export const IMPORT_HISTORY_FETCH = "IMPORT_HISTORY_FETCHED "



export const submitXlsx = (formData) => {
    return (dispatch) => {
        dispatch({
            type: XLSX_UPLOAD_ATTEMPT,
            payload: true
        })
        let headers =  new Headers();
        headers.set('Accept', 'application/json');
        let fetchOptions = {
            method: 'POST',
            headers,
            body: formData
        };

        fetch('/api/import/xlsx/new', fetchOptions)
            .then(res => res.json())
            .then(res => {
                if(res.status === 'accept') {
                    dispatch({
                        type: XLSX_UPLOAD_SUCCESSFUL,
                        payload: res.data,
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: XLSX_UPLOAD_REJECTED,
                    payload: err.response.data.msg
                })
            })
    }
}


export const fetchImportedPriceLists = () => {
    return (dispatch) => {
        dispatch({
            type: IMPORT_HISTORY_LOADING,
        })
        axios.get("/api/import/fetch")
            .then((response)=> {
                if(response.data.status === 'accept'){
                    dispatch({
                        type: IMPORT_HISTORY_FETCH,
                        payload: response.data.data
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: IMPORT_HISTORY_LOADING,
                    payload: false
                })
                dispatch({
                    type: IMPORT_HISTORY_ERROR,
                    error: error
                })
            })
    }
}