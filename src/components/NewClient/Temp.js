import React, {Component} from "react"
import {Card,CardButton, CardHeader, CardFields} from "../FieldCard"
import {CardWideButton} from "../FieldCard/CardWideButton"
import InputField from "../InputFields/InputField"
import InputFieldWithRegex from "../InputFields/InputFieldWithRegex"


const juridicalPerson = [
    {label: "Esindaja nimi", key: "name", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
    {label: "Esindaja isikukood", key: "personalId", required: true, regex: /^[0-9]{11,11}$/},
    {label: "Ettevõtte nimi", key: "companyName", required: true, regex:/^[A-Za-zöäõü ]{3,50}$/},
    {label: "Ettevõtte aadress", key:"address", required: true, regex: /^(?![0-9])(.*?).*[A-Za-z0-9\/\- ]{3,50}$/},
    {label: "Reg. nr", key: "companyRegistration", required: true, regex: /^[0-9]{8,8}$/},
    {label: "E-post", key: "email", required: true, regex: /\S+@\S+\.\S+/},
    {label: "Telefon", key: "phone", required: true, regex: /^[0-9]{5,20}$/},
    {label: "volituse alus", key: "???", required: true, regex: /^[A-Za-z ]{3,20}$/}, //FIXME - Is this a dropdown?
    {label: "KMKNR", key: "vatDutyNumber", required: false, regex: /^[0-9]{14,14}$/},
]
const privatePerson = [
    {label: "nimi", key: "name", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
    {label: "isikukood", key: "personalId", required: true, regex: /^[0-9]{11,11}$/},
    {label: "aadress", key: "address", required: true, regex: /^(?![0-9])(.*?).*[A-Za-z0-9\/\- ]{3,50}$/},
    {label: "e-post", key: "email", required: false, regex: /\S+@\S+\.\S+/},
    {label: "telefon", key: "phone", required: false, regex: /^[0-9]{5,20}$/},
    {label: "dok nr", key: "documentId", required: false, regex: /^[0-9]{3,20}$/},
]

const NewClient = props => (

    <Card>
        <CardHeader>
            <CardButton
                callback={()=>props.changePersonType("privatePerson")}
                label="Eraisik"
                active={props.activeTab === "privatePerson"}
            />
            <CardButton
                callback={()=>props.changePersonType("juridicalPerson")}
                label="Juriidiline isik"
                active={props.activeTab === "juridicalPerson"}
            />
        </CardHeader>
        <CardFields>
            {
                (props.activeTab==="privatePerson" ? privatePerson : juridicalPerson)
                    .map(w => (
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


export default NewClient