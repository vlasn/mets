import axios from "axios"
import { session, stripFalsyProperties } from "../../utils/Utilities"
import Api from "../../utils/Api"

export const CREATION_FIELD_ERROR = "CREATION_FIELD_ERROR"
export const CREATION_SUCCESS = "CREATION_SUCCESS"
export const CREATION_FAILURE = "CREATION_FAILURE"
export const CREATION_ATTEMPT = "CREATION_ATTEMPT"
export const CREATION_CHANGE_FIELD_VALUE = "CREATION_CHANGE_FIELD_VALUE"
export const CREATION_CHANGE_PERSON_TYPE = "CREATION_CHANGE_PERSON_TYPE"
import { privatePerson,juridicalPerson } from "./NewClient"

export const changePersonType = personType => ({type: 'CREATION_CHANGE_PERSON_TYPE', payload: personType})
export const onFieldValueChange = (source, value) =>
    ({type: CREATION_CHANGE_FIELD_VALUE, payload:{key: source, value: value}})

export const onSubmitNewClient = (personType, details) => {
    return dispatch => {
        dispatch({type: CREATION_ATTEMPT})

        let fieldsWithErrors =
            (personType === "privatePerson" ? privatePerson : juridicalPerson)
            .reduce((acc, val) => {
                if (val.required && !val.regex.test(details[val.key])) {
                    acc = [...acc, val.label]
                }
                //else test passed on required field or field is not required
                return acc
            },[])
        if (fieldsWithErrors.length === 0) {
            Api('POST','/users', {
                    email: details.email,
                    personalData: {
                        ...stripFalsyProperties({
                            name: details.name,
                            phone: details.contact,
                            address: details.address,
                            idNumber: details.idNumber,
                            documentNumber: details.documentNumber,
                            companyId: details.companyRegistration,
                            vatDutyNumber: details.vatDutyNumber
                        }),
                        juridical: (details.type==='juridicalPerson')
                        //FIXME - volituse väli?
                    }
                })
                    .then(data => {
                        dispatch({ type: CREATION_SUCCESS })
                        dispatch({ type: "GLOBAL_SUCCESS",
                            payload: "Klient '" + data.personalData.name + "' loodud!"})
                    })
                    .catch(error => {
                        console.log(error);
                        dispatch({type: 'CREATION_FAILURE', payload: error})
                    })
        } else {
            dispatch(
                {
                    type: CREATION_FAILURE,
                    payload: "Palun täida vähemalt järgmised väljad: "+fieldsWithErrors.join(", ")
                }
            )
        }
    }
}