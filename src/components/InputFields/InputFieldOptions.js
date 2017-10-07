/**
 * Created by clstrfvck on 09/06/2017.
 */

import React from "react";
import InputField from "./InputField"
import { uuid } from "../../utils/Utilities"

import "./InputFieldOptions.scss"


const InputFieldOptions = props => (
    <div className="InputFieldOptions__wrapper">
        <div className="InputFieldOptions__parent" >
            { props.children }
            <div className="InputFieldOptions__options">
                {<span onClick={props.add}>Lisa</span>}
                {props.count > 1 && <span onClick={props.remove}> / kustuta</span>}
            </div>
        </div>
    </div>
)

export default InputFieldOptions

