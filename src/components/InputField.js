/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"


export class LoginForm extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input id={this.props.label} type="text"/>
            </div>
        );
    }
}