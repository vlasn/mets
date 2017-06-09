/**
 * Created by clstrfvck on 09/06/2017.
 */
import React from "react"
import { connect } from 'react-redux'
import { toggleDropdown } from '../actions/uiActions'
import { Redirect } from 'react-router-dom'
import Header from "./Header"
import axios from "axios"
import history from './history'

class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {

    }
    logout() {
        this.props.logout();
        this.props.toggleDropdown(true,false);
        history.push("/")
    }
    render() {
        return (
            <div className="login__wrapper">
                {
                    this.props.navigateToRoot ?
                        <Redirect to="/"/> : null
                }
                <Header {...this.props} logout={this.logout.bind(this)} />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch({type: "LOG_OUT"});
        },
        toggleDropdown: (currentlyOpen, loggedIn) => {
            dispatch(toggleDropdown(currentlyOpen,loggedIn))
            console.log(3, currentlyOpen, loggedIn)

        }
    }
};

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
        details: state.user.details,
        navigateToRoot: state.user.navigateToRoot,
        dropdownOpen: state.ui.dropdownOpen
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderWrapper);