import React, { Component } from "react"
import _Datepicker from "material-ui/DatePicker"
import "./InlineDatepicker.scss"

const formatDate = date => {
  return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
}

export default ({ name, value, callback = console.log, stateKey }) => {
  return (
    <div className="InlineDatepicker">
      <_Datepicker
        hintText={"Puudub"}
        DateTimeFormat={Intl.DateTimeFormat}
        mode="landscape"
        locale="et-EE"
        cancelLabel="Loobu"
        textFieldStyle={{width: "100%"}}
        onChange={(x, date) => callback(stateKey, date)}
        name={name}
        value={value}
      />
    </div>
  )
}