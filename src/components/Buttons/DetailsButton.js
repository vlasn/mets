import React from "react"
import FlatButton from "material-ui/FlatButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
const css = require("./DetailsButton.scss")

export default class DetailsButton extends React.Component {
    constructor(props) {
        super(props)
    }

    clicked() {
        this.props.clicked(this.props.name)
    }

    render() {
        let style = {
            height: '45px',
            //color: this.props.active === this.props.name ? 'white' : null, // Siia k'iks teine v2rv veel
        };
        return(
        <MuiThemeProvider>
            <FlatButton
                className ={`FlatButton--hover ${this.props.active===this.props.name ? 'active':''}`}
                label = {this.props.label}
                onTouchTap = {this.clicked.bind(this)}
                backgroundColor = {this.props.active === this.props.name ? "#9BFCD3" : null}
                color = {this.props.active === this.props.name ? "#9BFCD3" : null}
                style={style}
                hoverColor={"#9BFCD3"}
                disableTouchRipple={true}
            />
        </MuiThemeProvider>
        )
    }
}