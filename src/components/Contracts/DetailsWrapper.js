import React from "react"
import DetailsButton from "../Buttons/DetailsButton"
import FileRow from "./FileRow"
const css = require("./DetailsWrapper.scss");


export default class DetailsWrapper extends React.Component{
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
                {/*Haldusvaade*/}
                {this.state.activeTab === 'haldus' ?
                   DetailsTab([
                       {key: "Loomise kuupäev: ", value: this.props.created_timestamp.split("T")[0],
                           name: 'creation_date', protect: true},
                       {key: "Projektijuht: ", value: this.props.projektijuht,
                           name: 'projektijuht'},
                       {key: "Metsameister: ", value: this.props.metsameister,
                           name: 'metsameister'},
                    /*{key: "Kontakt: ", value: this.props.kontakt,
                           name: 'eeee'}, //Puudu?!*/

                       {key: "E-post: ", value: this.props.esindajad.join(', '),
                           name: 'esindajad', editable: this.props.esindajad},

                       {key: "Katastritunnus: ", value: this.props.kinnistu.katastritunnused.join(', '),
                            name: 'katastritunnused', editable: this.props.kinnistu.katastritunnused},

                       {key: "Raie teostamine: ", value: this.props.raie_teostamine},
                       {key: "Metsamaterjali väljaviimine: ", value: this.props.materjali_viimine},
                       {key: "Raidmete väljaviimine: ", value: this.props.raidmete_viimine},

                   ],false,this.updateRow) : null
                }
                {/*Lepinguvaade*/}
                {this.state.activeTab === 'leping' ?
                    this.props.documents && this.props.documents.contracts ?
                        this.props.documents.contracts.map(DetailsTab) : <EmptyTab/>
                    : null}
                {this.state.activeTab === 'teatis' ?
                    this.props.documents.metsateatis ?
                        this.props.documents.metsateatis.map(DetailsTab) : <EmptyTab/>
                    : null}
                {this.state.activeTab === 'hinnatabel' ?
                    this.props.documents.hinnatabel ?
                        this.props.documents.hinnatabel.map(DetailsTab) : <EmptyTab/>
                    : null}
                {this.state.activeTab === 'koondakt' ?
                    this.props.documents.koondakt ?
                        this.props.documents.koondakt.map(DetailsTab) : <EmptyTab/>
                    : null}
            </div>
        </div>
        )
    }
}
const DetailsTab = (data=[], nonFileRow = false, callback) => {
    let createNonFileRow = n => (
        <FileRow key={n.key} plainText plainKey={n.key} plainValue={n.value||<Missing/>}
                 name={n.name} editable={n.editable||false} change={callback}/>
    )
    let createDocumentRow = n => <FileRow fileName={n.filename} key={n.filename}/>
    return nonFileRow===false ? (data.map(createNonFileRow)) : (data.map(createDocumentRow))
};

const Missing = () => <span className="FileRow__missing-value">Puudub</span>;

const EmptyTab = () => (
    <div className="DetailsWrapper__missing-data-tab">
        <div className="DetailsWrapper__upload-link">Lisa fail..</div>
    </div>
)