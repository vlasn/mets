import React from 'react';
import _DatePicker from 'material-ui/DatePicker';
//FIXME - needs styling

const DatePicker = ({floatingLabelText, errorText, onChange = console.log})=>(
    <_DatePicker
        floatingLabelText={floatingLabelText}
        DateTimeFormat={Intl.DateTimeFormat}
        mode="landscape"
        locale="et-EE"
        cancelLabel="Loobu"
        textFieldStyle={{width: "100%"}}
        onChange={onChange}
        errorText = {errorText}
    />
)

export default DatePicker
az