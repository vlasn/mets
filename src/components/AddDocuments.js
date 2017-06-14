import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
const css = require("./AddDocuments.scss");

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
        float: 'left',
        padding: '0px 50px 0px 50px',
        display:'inline-block',
        boarderRadius:'0px',
        width: "400px",
    },
};

const documents = () => (
  <MuiThemeProvider>
  <div>
      <div className="Heading">Lisa dokumendid</div>
      <div className="Short__button">
      <FlatButton
          label='Leping'
          backgroundColor= "#868686"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.regularbutton}
      />
      <FlatButton
          label='Metsateatis'
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

    </div>
    <div className="Big__button">
      <FlatButton
          label='Loo leping'
          backgroundColor= "#00CC33"
          hoverColor = "#00CC33"
          labelStyle ={labelStyles.headerButton}
          style={styles.longbutton}
      /><br/><br/>
    </div>
  </div>
  </MuiThemeProvider>
);

export default documents
