import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

const styles = {
    button: {
        color: "white",
    },
    element: {
        backgroundColor: "#90CCAC",
        height: "90px",
        width: "330px",
    },
};


export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  };

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <FlatButton
            style={styles.button}
            backgroundColor= "black"
            hoverColor = "#9BFCD3"
            onTouchTap={this.handleTouchTap}
            label="Kinnita leping"
          />

          <Snackbar
            bodyStyle={styles.element}
            open={this.state.open}
            message="LEPINGU LOOMINE ÕNNESTUS!"
            autoHideDuration={3000}
            onRequestClose={this.handleRequestClose}
            contentStyle={{fontSize: '25px', textAlign: 'center', padding: "17px", lineHeight: "30px"}}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
