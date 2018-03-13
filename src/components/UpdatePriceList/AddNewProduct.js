import React, {Component} from "react"
import {Card,CardButton, CardHeader, CardFields, InlineFields, WideCard} from "../FieldCard"
import InputFieldWithRegex from "../InputFields/InputFieldWithRegex"
import InlineButton from "../Buttons/InlineButton"

export const fields = [
  {label: "Nimi", key: "name", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Asukoht", key: "location", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "EMPK", key: "EMPK", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Sortiment", key:"sortiment", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Puuliik", key: "treeType", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Min d", key: "minD", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Max d", key: "maxD", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Min L", key: "minL", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Max L", key: "maxL", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Kvaliteet", key: "quality", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Hind", key: "price", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/}
]

const AddNewProduct = props => {
  return (
    <WideCard>
      <InlineFields>
        {
          fields.map(w => (
            <InputFieldWithRegex
              key={w.key}
              name={w.key}
              floatingLabelText={w.label}
              required={w.required}
              asterisk={w.asterisk}
              regex={w.regex}
              onChange={props.onFieldValueChange}
            />
          ))
        }
        {console.log(props)}
        <InlineButton
          callback={() => props.attemptNewProductSubmit(props.details, props.activeTab)}
          label={"Lisa"}
        />
      </InlineFields>
    </WideCard>
  )
}

export default AddNewProduct
