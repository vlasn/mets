import React from "react"
import FlatButton from "material-ui/FlatButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

export default class DetailsButton extends React.Component {
    constructor(props) {
        super(props)
    }

    clicked() {
        this.props.clicked(this.props.name)
    }

    render() {
        return(
        <MuiThemeProvider>
            <FlatButton
                label = {this.props.label}
                onTouchTap = {this.clicked.bind(this)}
                backgroundColor = {this.props.active === this.props.name ? "#00CC33" : null}
                textColor = {this.props.active === this.props.name ? "#00CC33" : null}
                style={this.props.active === this.props.name ? {color:'white',} : null}
                hoverColor={"#00CC33"}
            />
        </MuiThemeProvider>
        )
    }
}