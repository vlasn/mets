import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import InputFieldOptions from './InputFieldOptions';
import InputField from './InputField';

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
};

const CreateTable = () => (
<MuiThemeProvider>
  <div>
      <div className="Heading">Loo hinnatabel</div>
      <div><p className="Text">Vali piirkond</p></div>
      <FlatButton
          label='Põhja-Eesti'
          backgroundColor= "#868686"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
      <FlatButton
          label='Lõuna-Eesti'
          backgroundColor= "#868686"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
      <FlatButton
          label='Muu'
          backgroundColor= "#868686"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
      <div className= "Textfield">
        <InputField
          floatingLabelText={"Kinnistunimi"}
        />
        <InputFieldOptions
          floatingLabelText={"Katastritunnus"}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <InputField
          floatingLabelText={"Külanimi"}
        />
        <InputField
          floatingLabelText={"Ülestöötamine"}
        />
        <InputField
          floatingLabelText={"Võsatööd"}
        />
        <InputField
          floatingLabelText={"Muu"}
        />
      </div>
      <div><p className="Text">Vali veotariif</p></div>
      <FlatButton
          label='Tariif 1'
          backgroundColor= "#868686"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
      <FlatButton
          label='Tariif 2'
          backgroundColor= "#868686"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
      <FlatButton
          label='Muu'
          backgroundColor= "#868686"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
        <div className="Big__button">
          <FlatButton
              label='Genereeri hinnatabeli eelvaade'
              backgroundColor= "#00CC33"
              hoverColor = "#00CC33"
              labelStyle ={labelStyles.headerButton}
              style={styles.longbutton}
          />
        </div>
  </div>
</MuiThemeProvider>
);

export default CreateTable
