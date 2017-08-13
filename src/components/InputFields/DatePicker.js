import React from 'react';
import _DatePicker from 'material-ui/DatePicker';
//FIXME - needs styling

const DatePicker = ({floatingLabelText, errorText, onChange = console.log, name, ...props})=> {
    const changed = (x, date) => {
        onChange(name, date)
    }
    return(<_DatePicker
        floatingLabelText={floatingLabelText}
        DateTimeFormat={Intl.DateTimeFormat}
        mode="landscape"
        locale="et-EE"
        cancelLabel="Loobu"
        textFieldStyle={{width: "100%"}}
        onChange={changed}
        errorText={errorText}
    />)
}

export default DatePicker
