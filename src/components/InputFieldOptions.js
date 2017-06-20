/**
 * Created by clstrfvck on 09/06/2017.
 */
const css = require("./InputFieldOptions.scss");
import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InputField from "./InputField"
import {uuid} from "../Utilities"


export default class InputFieldOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log("options: "+JSON.stringify(this.props))
        //console.log(uuid())
        return(
            <div className="InputFieldOptions__wrapper">
                <div className="InputFieldOptions__parent" >

                    <MuiThemeProvider>
                        <InputField
                            floatingLabelFixed={true}
                            name = {this.props.name}
                            hintText={this.props.hintText}
                            fullWidth={true}
                            errorText = {this.props.errorText}
                            underlineFocusStyle={this.props.underLineFocusStyle ? this.props.underlineFocusStyle:null}
                            floatingLabelFocusStyle={this.props.floatingLabelFocusStyle ? this.props.floatingLabelFocusStyle:null}
                            floatingLabelText={this.props.floatingLabelText}
                            //floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            change={this.props.updateValue.bind(this)}
                            value={this.props.value}

                        />
                    </MuiThemeProvider>

                    <div className="InputFieldOptions__options">
                        <span onClick={() => this.props.add(uuid(),this.props.fromArray)}>Lisa</span>
                        {this.props.name !== "Katastritunnus" && this.props.name !== "Kliendi_esindaja" ?
                            <span onClick={() => this.props.remove(this.props.name,this.props.fromArray)}> / kustuta</span>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
