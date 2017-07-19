import React from "react"
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const css = require("./InputField.scss");


const styles = {
    underlineStyle: {
        borderColor: '#9BFCD3',
    },

    floatingLabelFocusStyle:{
        color: 'black',
    }
};

export default class InputField extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(
                <div className = "InputField__wrapper">
                    <TextField
                        name={this.props.name}
                        hintText={this.props.hintText}
                        fullWidth={true}
                        errorText = {this.props.errorText}
                        underlineFocusStyle={styles.underlineStyle}
                        floatingLabelText={this.props.floatingLabelText}
                        floatingLabelFixed={true}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        onChange={(event)=>this.props.change(this.props.name,event.target.value)}
                    />
                </div>
        );
    }
}
