import React from 'react';
import _DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles ={
    date:{
        width: "100%"
    }
}
export default class DatePicker extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
              <_DatePicker
              floatingLabelText={this.props.floating}
              DateTimeFormat={Intl.DateTimeFormat}
              mode="landscape"
              locale="et-EE"
              cancelLabel="Loobu"
              textFieldStyle={styles.date}
              onChange={(x, date)=>this.props.change(this.props.name,date)}
              />

        )
    }
}
