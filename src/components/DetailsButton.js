import React from "react"
import FlatButton from "material-ui/FlatButton"

export default class DetailsButton extends React.Component {
    constructor(props) {
        super(props)
    }

    clicked() {
        this.props.clicked(this.props.name)
    }

    render() {
        return(
            <FlatButton
                label = {this.props.label}
                onTouchTap = {this.clicked.bind(this)}
                backgroundColor = {this.props.active === this.props.name ? "#009933" : null}
            />
        )
    }
}