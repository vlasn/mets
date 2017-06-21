import React, { Component } from "react"
import { connect } from "react-redux"


class AuthCheck extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        console.log(this.props)
        if(!this.props.loggedIn && this.props.pathname != "/" && this.props.pathname != "/login"){
            this.props.history.push("/login")
        }
    }
    render() {
        return <span>{" "}</span>
    }
}

export default connect((s)=>({loggedIn: s.user.loggedIn}))(AuthCheck)