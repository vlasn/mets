/**
 * Created by henrysavi on 15/08/17.
 */
import React, {Component} from "react"
import InputField from "../InputFields/InputField"
import "./NewContractRows.scss"

const NewContractRows = props => (

    <div className="NewContactRows__wrapper">
        <div className="NewContactRows__name">
            {props.name}
        </div>
        <div className="NewContactRows__remove" onClick={props.remove}>
            Eemalda
        </div>
    </div>
)

export default NewContractRows


