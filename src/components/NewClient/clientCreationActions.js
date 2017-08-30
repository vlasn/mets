import axios from "axios"
import { session, stripFalsyProperties } from "../../Utilities"

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
            axios.post('/api/user/create', {
                    email: details.email,
                    personal_data: {
                        ...stripFalsyProperties({
                            nimi: details.name,
                            tel_nr: details.contact,
                            aadress: details.address,
                            isikukood: details.personalId,
                            dok_nr: details.documentId,
                            reg_nr: details.companyRegistration,
                            kmk_nr: details.vatDutyNumber
                        }),
                        eraisik: (details.type==='privatePerson'),
                        juriidiline_isik: (details.type==='juridicalPerson')
                        //FIXME - volituse väli?
                    }
                },{
                    ...session()
                })
                    .then(({data})=>{
                    console.log(data)
                        if(data.status === 'accept') {
                            dispatch({type: 'CREATION_SUCCESS', payload: data.msg})
                        } else {
                            dispatch({type: 'CREATION_FAILURE', payload: data.msg})
                        }
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