import React from "react"
import DetailsButton from "./DetailsButton"
import FileRow from "./FileRow"
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

    render() {

        return(
            <div className="DetailsWrapper__wrapper">
            <div className="DetailsWrapper__button__background">
                <DetailsButton
                    name="haldus"
                    label="Haldus"
                    clicked = {this.switchTab}
                    active = {this.state.activeTab}
                />
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
            </div>
            <div>
                {this.state.activeTab === 'haldus' ?
                    (<div><FileRow plainText plainKey="Projektijuht:" plainValue={this.props.documents.haldus.projectManager}/>
                        <FileRow plainText plainKey="Metsameister:" plainValue={this.props.documents.haldus.metsameister}/></div>) : null}
                {this.state.activeTab === 'leping' ? this.props.documents.contracts.map((data, index)=>{
                    return <FileRow fileName={data.filename} key={index || data.id}/>
                }) : null}
                {this.state.activeTab === 'teatis' ?
                    <FileRow fileName={this.props.documents.metsateatis.filename}/> : null}
                {this.state.activeTab === 'koondakt' ?
                    <FileRow fileName={this.props.documents.koondakt.filename}/> : null}

            </div>


        </div>
        )
    }
}