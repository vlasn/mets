/**
 * Created by clstrfvck on 09/06/2017.
 */

const css = require("./testBtn.scss");
import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

export default class TestBtn extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="TestBtn__parent" >

            <MuiThemeProvider>
                    <TextField
                        type='text'
                        hintText='Tere'
                        floatingLabelText='test'
                        floatingLabelFixed={true}
                    />
            </MuiThemeProvider>

                <div className="TestBtn__options">
                    üks/kaks
                    </div>

            </div>

        )
    }

}
