import axios from "axios"

export const CREATION_FIELD_ERROR = "CREATION_FIELD_ERROR"
export const CREATION_SUCCESS = "CREATION_SUCCESS"
export const CREATION_FAILURE = "CREATION_FAILURE"
export const CREATION_CHANGE_FIELD_VALUE = "CREATION_CHANGE_FIELD_VALUE"
export const CREATION_CHANGE_PERSON_TYPE = "CREATION_CHANGE_PERSON_TYPE"

export const changePersonType = personType => ({type: 'CREATION_CHANGE_PERSON_TYPE', payload: personType})

export const onFieldValueChange = (source, value) => ({type: CREATION_CHANGE_FIELD_VALUE, payload:{key: source, value: value}})