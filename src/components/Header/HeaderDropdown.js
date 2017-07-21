import React from "react"
import "./HeaderDropdown.scss"


const Dropdown = ({children, roles, open, toggle, logOut}) => {
    let clickLogOut = () => {
        console.log("logout button clicked")
        logOut();
        toggle(false);
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

export default Dropdown