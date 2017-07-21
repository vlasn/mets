/**
 * Created by clstrfvck on 21/07/2017.
 */
import React from "react"
import { connect } from "react-redux"
import {Route, Redirect} from "react-router-dom"

const ProtectedRoute = ({loggedIn, roles, ownProps}) => {
    if(!loggedIn) {
        return <Redirect to="/"/>
    } else {
        return React.cloneElement(ownProps.component, {...ownProps})
    }
}

const mapStateToProps = (state, ownProps) => ({
    loggedIn: state.user.loggedIn,
    roles: state.user.roles,
    ownProps: ownProps
})
export default connect(mapStateToProps)(ProtectedRoute)