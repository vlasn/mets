import React from 'react';
import DatePicker from './DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const css = require("./Calendar.scss");

const DatePickerExampleSimple = () => (
  <MuiThemeProvider>
  <div>
    <DatePicker/>
      <div className="Heading">Lisa kuupäevad</div>
      <div className="Calendar left-align" ><DatePicker floating="Raie" DateTimeFormat={Intl.DateTimeFormat} locale="et-EE" /></div>
      <div className="Calendar"><DatePicker floating="Väljavedu" DateTimeFormat={Intl.DateTimeFormat} locale="et-EE" /></div>
      <div className="Calendar right-align"><DatePicker  floating="Raidmete väljavedu" DateTimeFormat={Intl.DateTimeFormat} locale="et-EE" /></div>
  </div>
  </MuiThemeProvider>
);


export default DatePickerExampleSimple
