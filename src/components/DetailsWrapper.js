import React from "react"
import DetailsButton from "./DetailsButton"
const css = require("./DetailsWrapper.scss");


export default class DetailsWrapper extends React.Component{
    constructor(props) {
        super(props)
        this.state={activeTab:null}
        this.switchTab = this.switchTab.bind(this)
    }
    switchTab(tab) {
        if(this.state.activeTab === tab) {
            this.setState({activeTab: null})
        } else {
            this.setState({
                activeTab: tab
            })
        }
    }

    Tab(arg) {
        return(`${arg} vaade on siin.`)
    }

    render() {
        return(
        <div>
            <DetailsButton
                name="leping"
                label="Leping"
                clicked = {this.switchTab}
                active = {this.state.activeTab}
            />
            <DetailsButton
                name="hinnatabel"
                label="Hinnatabel"
                clicked = {this.switchTab}
                active = {this.state.activeTab}

            />
            <DetailsButton
                name="teatis"
                label="Metsateatis"
                clicked = {this.switchTab}
                active = {this.state.activeTab}

            />
            <DetailsButton
                name="koondakt"
                label="Vaata koondakti"
                clicked = {this.switchTab}
                active = {this.state.activeTab}

            />
            <div>
                {this.state.activeTab===null ? null : this.Tab(this.state.activeTab)}
            </div>


        </div>
        )
    }
}