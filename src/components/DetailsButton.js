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
        let style = {
            //height: '9000px',
            color: this.props.active === this.props.name ? 'white' : null // Siia k'iks teine v2rv veel
        };
        return(
        <MuiThemeProvider>
            <FlatButton
                label = {this.props.label}
                onTouchTap = {this.clicked.bind(this)}
                backgroundColor = {this.props.active === this.props.name ? "#00CC33" : null}
                color = {this.props.active === this.props.name ? "#00CC33" : null}
                style={style}
                hoverColor={"#00CC33"}
            />
        </MuiThemeProvider>
        )
    }
}