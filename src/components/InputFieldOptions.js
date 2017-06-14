/**
 * Created by clstrfvck on 09/06/2017.
 */
const css = require("./InputFieldOptions.scss");
import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import InputField from "./InputField"

export default class InputFieldOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    textChangeHandler(event) {
        //console.log("my life is changing and i dont like it")
        this.props.updateValue(
            this.props.name, event.target.value
        );
    }
    //this.props.add
    //this.props.remove
    //this.props.key
    //AddClient

    render() {
        //console.log("options: "+JSON.stringify(this.props))
        return(
            <div className="InputFieldOptions__wrapper">
                <div className="InputFieldOptions__parent" >

                    <MuiThemeProvider>
                        <InputField
                            floatingLabelFixed={true}
                            name = {this.props.name}
                            hintText={this.props.hintText}
                            fullWidth={this.props.fullWidth}
                            errorText = {this.props.errorText}
                            //underlineFocusStyle={styles.underlineStyle}
                            floatingLabelText={this.props.floatingLabelText}
                            //floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            onChange={this.textChangeHandler.bind(this)}
                            value={this.props.value}
                        />
                    </MuiThemeProvider>

                    <div className="InputFieldOptions__options">
                        <span onClick={() => this.props.add(Date.now().toString(),this.props.fromArray)}>Lisa</span>

                        {this.props.name !== "Katastritunnus0" && this.props.name !== "Kliendi_esindaja0" ?
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
