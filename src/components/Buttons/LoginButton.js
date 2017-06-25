//reusable button component for login fields
import React from "react"

import FlatButton from 'material-ui/FlatButton';

export default class LoginButton extends React.Component{
    constructor(props) {
        super(props);
        this.btnClicked = this.btnClicked.bind(this)
    }

    btnClicked() {
        this.props.submitHandler();
    }

    render() {
        return(
            <div>
                <FlatButton
                    onClick={event => this.btnClicked()}
                    backgroundColor= {this.props.backgroundColor}
                    label= {this.props.label}
                    style={this.props.style}
                    hoverColor={this.props.hoverColor}
                    labelStyle ={this.props.labelStyle}
                    fullWidth={this.props.fullWidth}
                />
                {this.props.text}
            </div>
        );
    }
}