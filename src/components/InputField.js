import React from "react"
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const css = require("./InputField.scss");


const styles = {
    underlineStyle: {
        borderColor: '#00CC33',
    },

    floatingLabelFocusStyle:{
        color: 'black',
    }
};

export default class InputField extends React.Component{
    constructor(props) {
        super(props);
        this.textChangeHandler = this.textChangeHandler.bind(this);
    }

    textChangeHandler(event) {
        this.props.updateValue(
            this.props.name, event.target.value
        );
    }

    render(){
        return(
            <MuiThemeProvider>
                <div className = "InputField__wrapper">
                    <TextField
                        onChange={(event)=>this.textChangeHandler(event)}
                        hintText={this.props.hintText}
                        fullWidth={true}
                        errorText = {this.props.errorText}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelText={this.props.floatingLabelText}
                        floatingLabelFixed={true}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    />
                </div>
            </MuiThemeProvider>

        );
    }
}
