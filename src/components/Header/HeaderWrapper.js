/**
 * Created by clstrfvck on 09/06/2017.
 */
import React from "react"
import { connect } from 'react-redux'
import { toggleDropdown } from '../../actions/uiActions'
import { Redirect } from 'react-router-dom'
import Header from "./Header"
import history from '../history'

class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    logout() {
        this.props.logout();
        this.props.toggleDropdown(true,false);
        history.push("/")
    }
    returnName() {
        if(this.props.loggedIn) {
            console.log(this.props.details.personal_data)
            return this.props.details.personal_data.nimi.split(" ")[0]
        } else {
            return('Valikud')
        }
    }
    render() {
        return (
            <div className="login__wrapper">
                <Header {...this.props} logout={this.logout.bind(this)}
                        nameToDisplay={this.returnName.bind(this)} />
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
        }
    }
};

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
        details: state.user.details,
        navigateToRoot: state.user.navigateToRoot,
        dropdownOpen: state.ui.dropdownOpen,
        roles: state.user.roles
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderWrapper);