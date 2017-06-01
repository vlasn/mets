/**
 * Created by henrysavi on 31/05/17.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {Close} from "./Icons"
const css = require("./Dialog.scss");
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

export default class DialogTest extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const actions = [
            <Close
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <MuiThemeProvider>
                <div className="Dialog">
                    <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
                    <Dialog
                        title="Dialog With Actions"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        actionsContainerClassName="CloseButton"

                >
                        Veoseleht
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}