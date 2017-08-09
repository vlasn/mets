import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import HeaderDropdown from "./HeaderDropdown"
import { toggleDropdown } from "../../actions/uiActions"
import { logOut } from "../Login/loginActions"
import "./Header.scss"


const Header = props => (
    <div className="Header__Wrapper">
        <div className="Header__Third">
            <div className="Header__link-wrapper">
                <div className="Header__Link">
                    {props.loggedIn && <Link to="/">Töölaud</Link>}
                </div>
                <div className="Header__Link">
                    {props.loggedIn && <Link to="/archive">Arhiiv</Link>}
                </div>
            </div>
        </div>
        <div className="Header__Third wider">
            <h1 className="Header__title">Metsahaldur 2.0</h1>
        </div>
        <div className="Header__Third">
            <div className="Header__Link right">
                {props.loggedIn ?
                    <HeaderDropdown
                        roles={props.roles}
                        open={props.dropdownOpen}
                        toggle={props.toggleDropdown}
                        logOut={props.logOut}
                    >
                        { props.name }
                    </HeaderDropdown> :
                    <Link to="/login">Logi sisse</Link>
                }
            </div>
        </div>
    </div>
)

const mapStateToProps = state => ({
    name: state.user.details.nimi,
    loggedIn: state.user.loggedIn,
    roles: state.user.roles,
    dropdownOpen: state.ui.dropdownOpen
})

Header.propTypes = {
    name: PropTypes.string,
    loggedIn: PropTypes.bool.isRequired,
    roles: PropTypes.array,
    dropdownOpen: PropTypes.bool.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {toggleDropdown, logOut})(Header)