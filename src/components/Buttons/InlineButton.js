import React from "react"
import FlatButton from "material-ui/FlatButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
const css = require("./InlineButton.scss")

export const InlineButton = props => (
  <MuiThemeProvider>
    <div className={"InlineButton__wrapper"}>
      <FlatButton
        className ={"InlineButton__button"}
        label = {props.label}
        onClick={props.callback}
        hoverColor={"rgba(0, 0, 0, 0.3)"}
        backgroundColor={"rgba(0, 0, 0, 0.2)"}
        disableTouchRipple={false}
      />
    </div>
  </MuiThemeProvider>
)

export default InlineButton
