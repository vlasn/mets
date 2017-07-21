/**
 * Created by clstrfvck on 09/06/2017.
 */

import React from "react";
import InputField from "./InputField"
import {uuid} from "../../Utilities"

import "./InputFieldOptions.scss"


const InputFieldOptions = props => (
    <div className="InputFieldOptions__wrapper">
        <div className="InputFieldOptions__parent" >
             <InputField { ...props }/>
            <div className="InputFieldOptions__options">
                <span onClick={() => props.add(uuid(),props.fromArray)}>Lisa</span>
                {props.name !== "Katastritunnus" && props.name !== "Kliendi_esindaja" ?
                    <span onClick={() => props.remove(props.name,props.fromArray)}> / kustuta</span>
                    :
                    null
                }
            </div>
        </div>
    </div>
)

export default InputFieldOptions

