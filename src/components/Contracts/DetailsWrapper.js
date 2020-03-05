import React, { Component, cloneElement } from "react"
import DetailsButton from "../Buttons/DetailsButton"
import FileRow from "./FileRow/index"
const css = require("./DetailsWrapper.scss");


export default class DetailsWrapper extends Component{
    constructor(props) {
        super(props)
        this.state={
            activeTab:"management",
        }
        this.switchTab = this.switchTab.bind(this)
        this.updateRow = this.updateRow.bind(this)
    }
    switchTab(tab) {
        this.setState({
            activeTab: tab
        })
    }
    updateRow(key,value){
        this.props.updateRow(this.props._id,key,value)
    }

    render() {
        return(
            <div className="DetailsWrapper__wrapper">
            <div className="DetailsWrapper__button__background">
                <DetailsButton
                    name="management"
                    label="Haldus"
                    clicked = {this.switchTab}
                    active = {this.state.activeTab}
                />
                <DetailsButton
                    name="contracts"
                    label="Leping"
                    clicked = {this.switchTab}
                    active = {this.state.activeTab}
                />
                <DetailsButton
                    name="pricing"
                    label="Hinnatabel"
                    clicked = {this.switchTab}
                    active = {this.state.activeTab}
                />
                <DetailsButton
                    name="aggregate"
                    label="Vaata koondakti"
                    clicked = {this.switchTab}
                    active = {this.state.activeTab}
                />
            </div>
            <div>
                {this.state.activeTab === "management" && this.props.details}
                {this.state.activeTab === "contracts" && this.props.files}

            </div>
        </div>
        )
    }
}
