import React from "react"
import CardWideButton from "./CardWideButton"
import "./FieldCard.scss"


export const Card = ({children}) => (
    <div className="FieldCard__wrapper">
        <div className="FieldCard">
            {children}
        </div>
    </div>
)

export const CardButton = ({label, callback, active}) => (
    <div className={`FieldCard__button ${active&&"active"}`} onClick={callback}>
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
