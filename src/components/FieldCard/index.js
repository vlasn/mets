import React from "react"
import { uuid } from "../../Utilities"
import "./FieldCard.scss"
export const Card = ({children}) => (
    <div className="FieldCard__wrapper">
        <div className="FieldCard">
            {children}
        </div>
    </div>
)

export const CardButton = ({label, callback}) => (
    <div className="FieldCard__button" onClick={callback}>
        {label}
    </div>
)
export const CardHeader = ({children}) => (
    <div className="FieldCard__header">
        {children}
    </div>
)
export const CardFields = ({children}) => (
    <div className="FieldCard__fields">
        {children}
    </div>
)