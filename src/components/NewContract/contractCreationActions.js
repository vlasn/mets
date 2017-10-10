import axios from "axios"
import { session, uuid } from "../../utils/Utilities"
import Api from "../../utils/Api"

export const CONTRACT_PERSON_SEARCH_LOADING = "CONTRACT_PERSON_SEARCH_LOADING"
export const CONTRACT_PERSON_SEARCH_RESULTS = "CONTRACT_PERSON_SEARCH_RESULTS"
export const CONTRACT_PERSON_CLEAR_RESULTS = "CONTRACT_PERSON_CLEAR_RESULTS"
export const CONTRACT_ADD_REP = "CONTRACT_ADD_REP"
export const CONTRACT_REMOVE_REP = "CONTRACT_REMOVE_REP"
export const CONTRACT_UPDATE_REP = "CONTRACT_UPDATE_REP"
export const CONTRACT_FIELD_CHANGE = "CONTRACT_FIELD_CHANGE"
export const CONTRACT_CREATION_RESET = "CONTRACT_CREATION_RESET"
export const CONTRACT_ADD_FILE = "CONTRACT_ADD_FILE"
export const CONTRACT_REMOVE_FILE = "CONTRACT_REMOVE_FILE"

export const CONTRACT_VALIDATION_FAILURE = "CONTRACT_VALIDATION_FAILURE"
export const CONTRACT_SUBMIT_ATTEMPT = "CONTRACT_SUBMIT_ATTEMPT"
export const CONTRACT_SUBMIT_SUCCESS = "CONTRACT_SUBMIT_SUCCESS"
export const CONTRACT_SUBMIT_FAILURE = "CONTRACT_SUBMIT_FAILURE"

export const fetchPersonDropdownOptions = term => {
    return dispatch => {
        dispatch({type: CONTRACT_PERSON_SEARCH_LOADING, loading: true})
        Api("GET",`/users?name=${term}&idNumber=${term}`)
            .then(data => {
                dispatch({ type: CONTRACT_PERSON_SEARCH_LOADING, loading: false })
                if(data.length>0) {
                    let results = data.map(match => ({
                        id: match._id,
                        name: match.personalData.name,
                        identityCode: match.personalData.idNumber
                    }))
                    console.log(results)
                    dispatch({ type: CONTRACT_PERSON_SEARCH_RESULTS, results})
                } else {
                    dispatch({ type: CONTRACT_PERSON_CLEAR_RESULTS })
                }
            })
            .catch(console.log)
    }
}

const validateContractSubmission = (details, reps, files) => {
    let errors = []
    const validateOne = (value, regex) => regex.test(value)

    if(!validateOne(details['projectManager'], /^[A-Za-zöäõüÕÄÖÜ ]{3,20}$/)) errors.push('projectManager')
    if(!validateOne(details['foreman'], /^[A-Za-zöäõüÕÄÖÜ ]{3,20}$/)) errors.push('foreman')
    if(!validateOne(details.property.name, /^[A-Za-zöäõüÕÄÖÜ 0-9]{3,20}$/)) errors.push('property_name')
    if(!validateOne(details.property.cadastreId, /^[0-9]{3,20}$/)) errors.push('property_cadastreID')
    if (reps.length < 1) {
        errors.push("representatives")
    }
    if (files.contracts.length < 1) {
        errors.push("contracts")
    }
    return errors
}

export const attemptNewContractSubmit = (details, reps, files) => {
    const errors = validateContractSubmission(details, reps, files)
        if (errors.length < 1) {
            return dispatch => {
                dispatch({ type: CONTRACT_SUBMIT_ATTEMPT })
                let fd = new FormData()

                let headers = new Headers()
                headers.append("x-auth-token", session()["x-auth-token"])

                Object.keys(details)
                  .filter(key => key !== 'property')
                  .forEach(key => fd.append([key], details[key]))

                fd.append('property[name]', details.property.name)
                fd.append('property[cadastreId]', details.property.cadastreId)

                fd.append("representatives", reps.map(rep => rep.id).join())

                Object.keys(files)
                  .forEach(fileKey =>
                    files[fileKey]
                      .forEach(file => fd.append(fileKey, file))
                  )
                fetch('/api/contract/create', {
                  method: "POST",
                  body: fd,
                  headers
                })
                  .then(r => r.json())
                  .then(data => {
                      dispatch({ type: "GLOBAL_SUCCESS", text: "Leping loodud!" })
                      dispatch({ type: CONTRACT_SUBMIT_SUCCESS })
                  })
                  .catch(console.log)
            }
        } else {
            return { type: CONTRACT_VALIDATION_FAILURE, errors: errors }
        }
}

export const onDefaultFieldChange = (key, value) => {
    return { type: CONTRACT_FIELD_CHANGE, key, value }
}

export const addRepresentative = () => {
    return { type: CONTRACT_ADD_REP, key: uuid() }
}

export const removeRepresentative = key => {
    return { type: CONTRACT_REMOVE_REP, key }
}

export const updateRepresentative = (key, name, id) => {
    return { type: CONTRACT_UPDATE_REP, key, name, id }
}
export const resetContractCreation = () => ({type: CONTRACT_CREATION_RESET})

export const uploadFile = (file, fileType)  => ({type: CONTRACT_ADD_FILE, file: file.item(0), fileType})

export const removeFile = fileName => ({type: CONTRACT_REMOVE_FILE, fileName})