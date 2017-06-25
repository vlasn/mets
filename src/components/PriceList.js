import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import InputFieldOptions from './InputFields/InputFieldOptions';
import InputField from './InputFields/InputField';


//TODO - separate folder for this as it is pretty much a stand-alone view? Also needs separate stylesheet

const css = require("./NewClient/CreateClient.scss");

const labelStyles = {
    headerButton: {
        color: 'white'
    }
}

const styles = {
    regularbutton: {
      width: "160px",
      display:'inline-block',
      boarderRadius:'0px',
      margin: "10px",
    },
    longbutton: {
        width: "390px",
    },
    dropdownButton: {
        display:'block',
        color:'black',
        textDecoration:'none',
        padding: '0px 20px 0px 20px',
        height: '45px'
    },
};


const CreateTable = () => (

<MuiThemeProvider>
  <div>
      <div className="Heading">Loo hinnatabel</div>
      <div><p className="Text">Vali piirkond ja tariif</p></div>
      <FlatButton
          label='Põhja-Eesti'
          backgroundColor= "#9BFCD3"
          hoverColor = "#9BFCD3"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
      <FlatButton
          label='Tariif 1'
          backgroundColor= "#9BFCD3"
          hoverColor = "#9BFCD3"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
      <div className= "InputField">
        <InputField
          floatingLabelText={"Kinnistunimi"}
        />
        <InputFieldOptions
          floatingLabelText={"Katastritunnus"}
          underlineFocusStyle={styles.underlineStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          updateValue={()=>{}}
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

        <div className="Big__button">
          <FlatButton
              label='Genereeri hinnatabeli eelvaade'
              backgroundColor= "#9BFCD3"
              hoverColor = "#9BFCD3"
              labelStyle ={labelStyles.headerButton}
              style={styles.longbutton}
          />
        </div>
  </div>
</MuiThemeProvider>
);

export default CreateTable
