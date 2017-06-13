/**
 * Created by clstrfvck on 09/06/2017.
 */

const css = require("./InputFieldOptions.scss");
import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import InputField from "./InputField"

export default class InputFieldOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    //this.props.add
    //this.props.remove
    //this.props.key
    //AddClient


    render() {
      console.log('inputi seest: ', this.props)
        return(
            <div className="InputFieldOptions__wrapper">
                <div className="InputFieldOptions__parent" >

                    <MuiThemeProvider>
                        <InputField
                            floatingLabelFixed={true}
                            hintText={this.props.hintText}
                            fullWidth={true}
                            errorText = {this.props.errorText}
                            underlineFocusStyle={this.props.underLineFocusStyle ? this.props.underlineFocusStyle:null}
                            floatingLabelFocusStyle={this.props.floatingLabelFocusStyle ? this.props.floatingLabelFocusStyle:null}
                            floatingLabelText={this.props.floatingLabelText}
                            //floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            style={this.props.style}
                        />
                    </MuiThemeProvider>

                    <div className="InputFieldOptions__options">
                        <span onClick={() => this.props.add(this.props.index,this.props.fromArray)}>Lisa </span>
                        /
                        <span onClick={() => this.props.remove(this.props.index, this.props.fromArray)}> kustuta</span>
                    </div>
                </div>
            </div>

        )
    }

}
