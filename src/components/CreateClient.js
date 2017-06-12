import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const css = require("./CreateClient.scss");

const labelStyles = {
    headerButton: {
        color: 'white'
    }
}

const styles = {
    regularbutton: {
        float: 'left',
        width: "161px",
        display:'inline-block',
        boarderRadius:'0px',
        margin: "10px",
    },
    longbutton: {
        width: "330px",
    },
    underlineStyle: {
        borderColor: '#00CC33',
    },
    floatingLabelFocusStyle:{
        color: 'black',
    }
};

const clients = () => (
  <MuiThemeProvider>
  <div>
    {/*Eraisiku vorm*/}
      <div className="Heading">Loo klient</div>
      <FlatButton
          label='Juriidiline isik'
          backgroundColor= "#868686"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
      <FlatButton
          label='Eraisik'
          backgroundColor= "#868686"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      /><br/><br/>
      <div className= "Textfield">
      <TextField
        floatingLabelText="Nimi"
        underlineFocusStyle={styles.underlineStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        floatingLabelFixed={true}
        fullWidth={true}
      />
      <TextField
        floatingLabelText="Isikukood"
        underlineFocusStyle={styles.underlineStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        floatingLabelFixed={true}
        fullWidth={true}
      />
      <TextField
        floatingLabelText="Dokumendi number"
        underlineFocusStyle={styles.underlineStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        floatingLabelFixed={true}
        fullWidth={true}
      />
      <TextField
        floatingLabelText="E-posti aadress"
        underlineFocusStyle={styles.underlineStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        floatingLabelFixed={true}
        fullWidth={true}
      />
      <TextField
        floatingLabelText="Kontakt"
        underlineFocusStyle={styles.underlineStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        floatingLabelFixed={true}
        fullWidth={true}
      />
      <TextField
        floatingLabelText="Aadress"
        underlineFocusStyle={styles.underlineStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        floatingLabelFixed={true}
        fullWidth={true}
      />
      </div>
      <div className="Big__button">
        <FlatButton
            label='Loo klient'
            backgroundColor= "#00CC33"
            hoverColor = "#00CC33"
            labelStyle ={labelStyles.headerButton}
            style={styles.longbutton}
        /><br/><br/>
      </div>
      {/*Juriidilise isiku vorm*/}
        <FlatButton
            label='Juriidiline isik'
            backgroundColor= "#868686"
            hoverColor = "#00CC33"
            labelStyle ={labelStyles.headerButton}
            style={styles.regularbutton}
        />
        <FlatButton
            label='Eraisik'
            backgroundColor= "#868686"
            hoverColor = "#00CC33"
            labelStyle ={labelStyles.headerButton}
            style={styles.regularbutton}
        /><br/><br/>
        <div className= "Textfield">
        <TextField
          floatingLabelText="Nimi"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          floatingLabelText="Reg nr"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          floatingLabelText="E-posti aadress"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          floatingLabelText="KMKNR"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          floatingLabelText="Kontakt"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          floatingLabelText="Aadress"
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelFixed={true}
          fullWidth={true}
        />
        </div>
        <div className="Big__button">
          <FlatButton
              label='Loo klient'
              backgroundColor= "#00CC33"
              hoverColor = "#00CC33"
              labelStyle ={labelStyles.headerButton}
              style={styles.longbutton}
          />
        </div>
  </div>
</MuiThemeProvider>
);

export default clients
