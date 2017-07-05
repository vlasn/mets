import axios from "axios"
import { session } from "../Utilities" //{...session()}

export const PRICEFORM_FETCHING_KEY = "PRICEFORM_FETCHING_KEY "
export const PRICEFORM_UPDATE_KEYS = "PRICEFORM_UPDATE_KEYS "
export const PRICELIST_LOADING = "PRICELIST_LOADING "
export const PRICELIST_MISMATCHES = "PRICELIST_MISMATCHES "
export const PRICEFORM_EDITS_BUNDLE = "PRICEFORM_EDITS_BUNDLE "
export const PRICELIST_SELECT_EDITABLE = "PRICELIST_SELECT_EDITABLE "

export const PRICELIST_ADD_SUCCESSFUL = "PRICELIST_ADD_SUCCESSFUL "
export const PRICELIST_ADD_FAILED = "PRICELIST_ADD_FAILED "
export const PRICELIST_MATCH_CONFIRMED = "PRICELIST_MATCH_CONFIRMED "
export const PRICELIST_MATCH_REJECTED = "PRICELIST_MATCH_REJECTED "
export const PRICELIST_SUBMIT_ERROR = "PRICELIST_SUBMIT_ERROR "

export const TRANSMIT_PARENT = "TRANSMIT_PARENT"



export const getOptions = (fieldKey) => {
    return (dispatch) => {
        dispatch({
            type: PRICEFORM_FETCHING_KEY,
            payload: true
        })
        axios.get(`/api/reports/fieldOpts/${fieldKey}`,{...session()})
            .then(({data}) => {
                dispatch({
                    type: PRICEFORM_FETCHING_KEY,
                    payload: false
                })
                if(data.status === 'accept' && data.data.length>0) {
                    if(typeof(data[0])==='number') data.data = data.data.map(v => v.toString())
                    dispatch({
                        type: PRICEFORM_UPDATE_KEYS,
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

export const fetchSinglePricelist = (importId) => {
    return (dispatch) => {
        dispatch({
            type: PRICELIST_LOADING,
            payload: true
        })
        axios.get("/api/reports?id="+importId,{...session()})
            .then(({data})=> {
                dispatch({
                    type: PRICELIST_LOADING,
                    payload: false
                });
                if(data.status == 'accept' && data.data.unmatched.length>0) {
                    console.log(data.data.unmatched)
                    dispatch({
                        type: PRICELIST_MISMATCHES,
                        payload: data.data
                    })
                }
            })
            .catch(console.log) // TODO - error handling
    }
}

export const selectEditable = (id) => {
    return (dispatch) => {
        dispatch({type: PRICELIST_SELECT_EDITABLE, payload: id})
    }
}

export const addToBundle = (_id, key, value) => {
    return (dispatch) => {
        dispatch({
            type: PRICEFORM_EDITS_BUNDLE,
            payload: {
                _id, key, value
            }
        })
    }
}

export const addNewPriceListItem = (bundle, parentId) =>{
    return (dispatch) => {
        dispatch({
            type: PRICELIST_LOADING,
            payload: true
        })
        let missing = false
        let mapKeys = {
            tarnekoht: "Sihtkoht",
            priceGrpMin: "Diameeter_min",
            priceGrpMax: "Diameeter_max",
            puuliik: "Puuliik",
            kvaliteet: "Kvaliteet",
        }
        //remap keys in bundle based on the above map..
        Object.keys(mapKeys).map(key=>bundle.hasOwnProperty(key) ? bundle[mapKeys[key]] = bundle[key] : null)
        let requiredIndices = [
            "Sihtkoht","Puuliik","Sortiment","Diameeter_min",
            "Diameeter_max","Pikkus_min","Pikkus_max","Kvaliteet","Hind"
        ]
        //...and check their presence.
        requiredIndices.map(val => bundle.hasOwnProperty(val) ? console.log(val+' ok') : (missing = true))

        if(!missing) {
            axios.post('/api/pricelists', {...bundle, parentId},{...session()})
                .then(res => {
                    console.log(JSON.stringify({...bundle, parentId}))
                    console.log(res)
                    dispatch({
                        type: PRICELIST_ADD_SUCCESSFUL,
                        keyToRemove: bundle._id,
                        mismatches: res.data.data.mismatches
                    })
                    dispatch({
                        type: PRICELIST_LOADING,
                        payload: false
                    })
                })
                .catch(err =>{
                    console.log(err)
                    dispatch({
                        type: PRICELIST_ADD_FAILED,
                    })
                })
        }
    }
}

export const transmitParent = (id) => {
    return {type: TRANSMIT_PARENT, payload: id}
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

    console.log({
        ...prevValues,
        ...bundledEdits
    })

    return (dispatch) => {
        //console.log(JSON.stringify({ ...prevValues, ...bundledEdits}), missing);
        if(!missing) {
            //TODO - needs to dispatch loader event here
            axios.post('/api/import/xlsx/update', { //Needs path as /import has been deprecated
                ...prevValues,
                ...bundledEdits
            },{...session()})
                .then(({data}) => {
                    if(data.status == 'accept') {
                        dispatch({
                            type: PRICELIST_MATCH_CONFIRMED,
                            payload: data.data
                        })
                    }
                })
                .catch(err => {
                    if(err.response.status === 500) {
                        dispatch({
                            type: PRICELIST_MATCH_REJECTED
                        })
                    }
                })
        } else {
            dispatch({
                type: PRICELIST_SUBMIT_ERROR,
                payload: "Osad väärtused on täitmata!"
            })
        }
    }
}
