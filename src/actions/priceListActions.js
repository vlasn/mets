import axios from "axios"

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

export const fetchImportedPriceLists = () => {
    return (dispatch) => {
        dispatch({
            type: "PRICELIST_LOADING",
            payload: true
        })
        axios.get("/api/import/fetch")
            .then((response)=> {
                dispatch({
                    type: "PRICELIST_LOADING",
                    payload: false
                })
                if(response.data.status === 'accept'){
                    console.log(response)

                    dispatch({
                        type: "PRICELIST_IMPORT_HISTORY",
                        payload: response.data.data
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: "PRICELIST_LOADING",
                    payload: false
                })
                dispatch({
                    type: "PRICELIST_ERROR",
                    error: error
                })
            })
    }
}

export const fetchSinglePricelist = (importId) => {
    return (dispatch) => {
        dispatch({
            type: "PRICELIST_LOADING",
            payload: true
        })
        axios.get("/api/import/fetch?id="+importId)
            .then(({data})=> {
                dispatch({
                    type: "PRICELIST_LOADING",
                    payload: false
                });
                if(data.status == 'accept' && data.data.unmatched.length>0) {
                    dispatch({
                        type: "PRICELIST_MISMATCHES",
                        payload: data.data
                    })
                }
            })
            .catch(console.log) // TODO - error handling
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

export const submitXlsx = (formData) => {
    return (dispatch) => {
        dispatch({
            type: "XLSX_UPLOAD_ATTEMPT",
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
                dispatch({
                    type: "XLSX_UPLOAD_ATTEMPT",
                    payload: false
                })
                if(res.status === 'accept') {
                    dispatch({
                        type: "XLSX_UPLOAD_SUCCESSFUL",
                        payload: res.data,
                    })
                }
            })
            .catch(console.log)
    }
}

export const addNewPriceListItem = (bundle, parentId) =>{
    return (dispatch) => {
        dispatch({
            type: "PRICELIST_LOADING",
            payload: true
        })
        console.log(bundle)
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
            axios.post('/api/pricelist/add', {...bundle, parentId})
                .then(res => {
                    console.log(bundle._id);
                    dispatch({
                        type: "PRICELIST_ADD_SUCCESSFUL",
                        keyToRemove: bundle._id
                    })
                    dispatch({
                        type: "PRICELIST_LOADING",
                        payload: false
                    })
                    console.log(res);


                })
                .catch(err =>{
                    dispatch({
                        type: "PRICELIST_ADD_FAILED",
                    })
                })
        }
    }
}

export const transmitParent = (id) => {
    return {type: "TRANSMIT_PARENT", payload: id}
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
        //console.log(JSON.stringify({ ...prevValues, ...bundledEdits}), missing);
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
                .catch(err => {
                    if(err.response.status === 500) {
                        dispatch({
                            type: "PRICELIST_MATCH_REJECTED"
                        })
                    }
                })
        } else {
            dispatch({
                type: "PRICELIST_SUBMIT_ERROR",
                payload: "Osad väärtused on täitmata!"
            })
        }
    }
}
