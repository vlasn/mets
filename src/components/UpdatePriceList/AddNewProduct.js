import React, {Component} from "react"
import {Card,CardButton, CardHeader, CardFields} from "../FieldCard"
import InputFieldWithRegex from "../InputFields/InputFieldWithRegex"

export const fields = [
  {label: "Saeveski nimi", key: "name", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Asukoht", key: "idNumber", required: true, regex: /^[0-9]{11,11}$/},
  {label: "EMPK", key: "companyName", required: true, regex:/^[A-Za-zöäõü ]{3,50}$/},
  {label: "Sortiment", key:"address", required: true, regex: /^(?![0-9])(.*?).*[A-Za-z0-9\/\- ]{3,50}$/},
  {label: "Puuliik", key: "companyId", required: true, regex: /^[0-9]{8,8}$/},
  {label: "Min d", key: "email", required: true, regex: /\S+@\S+\.\S+/},
  {label: "Max d", key: "phone", required: true, regex: /^[0-9]{5,20}$/},
  {label: "Min L", key: "????", required: true, regex: /^[A-Za-z ]{3,20}$/},
  {label: "Max L", key: "vatDutyNumber", required: true, regex: /^[0-9]{14,14}$/},
  {label: "Kvaliteet", key: "???", required: true, regex: /^[A-Za-z ]{3,20}$/},
  {label: "Hind", key: "price", required: true, regex: /^[0-9]{14,14}$/}
]

const AddNewProduct = props => (
  <Card>
    <CardFields>
      {
        fields.map(w => (
          <InputFieldWithRegex
            key={w.key}
            name={w.key}
            floatingLabelText={w.label}
            required={w.required}
            regex={w.regex}
            onChange={props.onFieldValueChange}
          />
        ))
      }
    </CardFields>
  </Card>
)

export default AddNewProduct