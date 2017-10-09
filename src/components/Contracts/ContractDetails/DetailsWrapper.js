import React, { Component, cloneElement } from "react"
import DetailsButton from "../../Buttons/DetailsButton"
import FileRow from "../FileRow/index"
const css = require("./DetailsWrapper.scss");


export default class DetailsWrapper extends Component{
    constructor(props) {
        super(props)
        this.state={
            activeTab:null,
        }
        this.switchTab = this.switchTab.bind(this)
        this.updateRow = this.updateRow.bind(this)
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
    updateRow(key,value){
        this.props.updateRow(this.props._id,key,value)
    }

    render() {
        console.log('detailsview:', this.props)
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
                {this.props.children}
                {/*{this.state.activeTab === 'haldus' ?*/}
                   {/*DetailsTab([*/}
                       {/*{key: "Loomise kuupäev: ", value: this.props.createdAt.split("T")[0],*/}
                           {/*name: 'createdAt', protect: true},*/}
                       {/*{key: "Projektijuht: ", value: this.props.projectManager,*/}
                           {/*name: 'projectManager'},*/}
                       {/*{key: "Metsameister: ", value: this.props.foreman,*/}
                           {/*name: 'foreman'},*/}

                       {/*{key: "E-post: ", value: this.props.representatives.map(r => r.personalData.name).join(", "),*/}
                           {/*name: 'representatives', editable: this.props.esindajad},*/}

                        {/*{key: "Katastritunnus: ", value: this.props.property.cadastreIds.join(", "),*/}
                            {/*name: 'katastritunnused', editable: this.props.property},*/}

                       {/*{key: "Raie teostamine: ", value: this.props.raie_teostamine},*/}
                       {/*{key: "Metsamaterjali väljaviimine: ", value: this.props.materjali_viimine},*/}
                       {/*{key: "Raidmete väljaviimine: ", value: this.props.raidmete_viimine},*/}

                   {/*],false,this.updateRow) : null*/}
                {/*}*/}
                {/*/!*Lepinguvaade*!/*/}
                {/*/!*FIXME: refactor all of this jazz*!/*/}
                {/*{this.state.activeTab === 'leping' ?*/}
                    {/*this.props.documents && this.props.documents.contracts ?*/}
                        {/*this.props.documents.contracts.map(DetailsTab) : <EmptyTab/>*/}
                    {/*: null}*/}
                {/*{this.state.activeTab === 'hinnatabel' ?*/}
                    {/*this.props.documents.hinnatabel ?*/}
                        {/*this.props.documents.hinnatabel.map(DetailsTab) : <EmptyTab/>*/}
                    {/*: null}*/}
                {/*{this.state.activeTab === 'koondakt' ?*/}
                    {/*this.props.documents.koondakt ?*/}
                        {/*this.props.documents.koondakt.map(DetailsTab) : <EmptyTab/>*/}
                    {/*: null}*/}
            </div>
        </div>
        )
    }
}
