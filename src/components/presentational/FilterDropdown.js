/**
 * Created by clstrfvck on 14/06/2017.
 */
import React from "react"
import FlatBtn from "material-ui/FlatButton"

const translations = {
    active: "Aktiivne",
    pending: "Ootel",
    expired: "Aegunud",
    done: "Tehtud",
}

export const Dropdown = (props)=>{

    return(
        <div className="FilterDropdown__wrapper">
            <div className="FilterDropdown__header">
                <FlatBtn
                    className={`FilterDropdown__button ${
                            props.applied.length>0?'applied':''}
                        `}
                    onClick={()=>props.toggle(props.name)}
                >
                    {
                        props.applied.length>0?translations[props.applied]||props.applied:props.label
                    }
                </FlatBtn>
            </div>
            {props.open ? (<div className="FilterDropdown__content">
                {props.children}
            </div>):null}
        </div>
    )
}

export const DropdownOption = (props) => {
    let isSelected = props.activeOption === props.status;
    let className = isSelected ? 'DropdownOption__wrapper selected':'DropdownOption__wrapper'
    return(
        <div
            className={className}
            onClick={()=>props.onClick(isSelected?'':props.status)}
        >
            {props.children}
        </div>
    )
};