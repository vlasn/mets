import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import "./Navbar.scss"

export const Navbar = ({loggedIn}) => (
    loggedIn ?
    <div className="Navbar__wrap">
        <div className="Navbar__buttons">
            <NavbarLink to="/imports">Impordi mõõteraport</NavbarLink>
            <NavbarLink to="/new_contract">Loo uus leping</NavbarLink>
            <NavbarLink to="/">Loo hinnapakkumine</NavbarLink>
            <NavbarLink to="/new_client">Loo uus klient</NavbarLink>
            <NavbarLink to="/update_pricelist">Uuenda hinnakirja</NavbarLink>
        </div>
    </div> :
    null
)

export const NavbarLink = ({children, to}) => (
    <div className="Navbar__link">
        <Link to={to}>{children}</Link>
    </div>
)

export default connect(state=>({loggedIn: state.user.loggedIn}))(Navbar)