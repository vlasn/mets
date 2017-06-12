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

    toggleOpen = () => {
        this.setState({open: !this.state.open})
    };

    render() {
        const actions = [
            <Close
                onTouchTap={this.toggleOpen}
            />
        ];

        return (
        <MuiThemeProvider>
            <div>
                <div onClick={this.toggleOpen}>
                    {this.props.children}
                </div>
                <div className="Dialog">
                    <Dialog
                        title={this.props.title}
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.toggleOpen}
                        actionsContainerClassName="CloseButton"
                    >
                        {this.props.content}
                    </Dialog>
                </div>
            </div>
        </MuiThemeProvider>
        );
    }
}
