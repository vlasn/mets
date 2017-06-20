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
                    if(typeof(data[0])==='number') data.data = data.data.map(v => v.toString())
                    dispatch({
                        type: "PRICEFORM_UPDATE_KEYS",
                        payload: {
                            key: fieldKey,
                            options: data.data.sort().map(v=>
                                typeof(v) ==='string' ? v.trim() : v.toString().trim()
                            )
                        }
                    })
                }
            })
            .catch(console.log) // needs error handling
    }
}

export const importRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "PRICELIST_LOADING",
            payload: true
        })
        fauxImportRequest() //axios.post....etc
            .then((data)=> {
                dispatch({
                    type: "PRICELIST_LOADING",
                    payload: false
                });
                if(data.status == 'accept' && data.data.unmatched.length>0) {

                    dispatch({
                        type: "PRICELIST_MISMATCHES",
                        payload: data
                    })
                }
            })
            .catch(console.log) // needs error handling
    }
}

export const selectEditable = (id) => {
    return (dispatch) => {
        dispatch({type: "PRICELIST_SELECT_EDITABLE", payload: id})
    }
}

export const addToBundle = (_id, key, value) => {
    return (dispatch) => {
        dispatch({
            type: "PRICEFORM_EDITS_BUNDLE",
            payload: {
                _id, key, value
            }
        })
    }
}

export const submitBundle = (prevValues, editedValues) => {
    let priceGrpKey= "hinna gr  \"võti\""

    let pgMin = editedValues.priceGrpMin || false
    let pgMax = editedValues.priceGrpMax || false
    let bundledEdits = {
        ...editedValues,
        [priceGrpKey]:  pgMin && pgMax ? `${pgMin}-${pgMax}` : false
    }

    let missing = Object.keys(bundledEdits)
            .map(key => {
                return bundledEdits[key]
            })
            .indexOf(false) !== -1 //bool


    return (dispatch) => {
        console.log(JSON.stringify({ ...prevValues, ...bundledEdits}), missing);
        if(!missing) {
            axios.post('/api/import/xlsx/update', {
                ...prevValues,
                ...bundledEdits
            })
                .then(({data}) => {
                    if(data.status == 'accept') {
                        dispatch({
                            type: "PRICELIST_MATCH_CONFIRMED",
                            payload: data.data
                        })
                    }
                })
                .catch(console.log) // needs error handling
        } else {
            dispatch({
                type: "PRICELIST_SUBMIT_ERROR",
                payload: "Osad väärtused on täitmata!"
            })
        }
    }
}



///Dummydata:
const fauxImportRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(data), 1500)
    })
}