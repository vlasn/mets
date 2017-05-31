import React from "react"
const css = require("./Modal.scss");
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  radioButton: {
    marginTop: 16,
  },
};

export default class Modal extends React.Component {
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
      <FlatButton
        label="X"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    let contentHTML = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );

    return (
      <MuiThemeProvider>
      <div>
        <RaisedButton label="Veoseleht" onTouchTap={this.handleOpen} />
        <Dialog
          title="Veoseleht"
          actions={actions}
          modal={false}
          children={contentHTML}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >


        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}
