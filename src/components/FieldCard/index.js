import React from "react"
import CardWideButton from "./CardWideButton"
import "./FieldCard.scss"
import ReactFileReader from 'react-file-reader'

export const Card = ({children}) => (
    <div className="FieldCard__wrapper">
        <div className="FieldCard">
            {children}
        </div>
    </div>
)
export const WideCard = ({children}) => (
  <div className="FieldCard__wrapper">
    <div className="FieldCardWide">
      {children}
    </div>
  </div>
)
export const CardButton = ({label, callback, active}) => (
    <div className={`FieldCard__button ${active&&"active"}`} onClick={callback}>
        {label}
    </div>
)
export const CardUploadButton = ({label, callback, type}) => (
    <div className={`FieldCard__button`}>
        <ReactFileReader handleFiles={f=>callback(f, type)} fileTypes={"application/pdf, image/*"}>
            <div>{label}</div>
        </ReactFileReader>
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
export const InlineFields = ({children}) => (
  <div className="FieldCard__InlineFields">
    {children}
  </div>
)
