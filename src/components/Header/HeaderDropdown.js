import React from "react"
import PropTypes from "prop-types"
import "./HeaderDropdown.scss"


const HeaderDropdown = ({children, roles, open, toggle, logOut}) => {
    let clickLogOut = () => {
        logOut()
        toggle(false)
    }
    return(
        <div className="HeaderDropdown-wrapper">
            <div className="HeaderDropdown-button"
                 onClick={()=>toggle(open)}
            >
                {children}
            </div>
            {open && <div className="HeaderDropdown-options">
                {roles.length>1 ?
                    <div className="HeaderDropdown--option">
                        Vaheta rolle
                    </div> :
                    ""}
                <div className="HeaderDropdown--option" onClick={clickLogOut}>
                    Log out
                </div>
            </div>}
        </div>
    )
}

HeaderDropdown.propTypes = {
    children: PropTypes.obj,
    loggedIn: PropTypes.bool.isRequired,
    roles: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
}

export default HeaderDropdown