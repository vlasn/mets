import React from "react"
import DetailsButton from "../DetailsButton"
import FileRow from "./FileRow"
const css = require("./DetailsWrapper.scss");


export default class DetailsWrapper extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            activeTab:null,
            katastritunnused: [],
            esindajad: []
        }
        this.switchTab = this.switchTab.bind(this)
        this.onChangeSets = this.onChangeSets.bind(this)
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
    onChangeSets(set,prevV,currV, action){
        let oldArr = this.state[set]
        let newArr = false
        if(action === 'remove') {
            newArr = oldArr.filter(({key,val})=>(val!==prevV))
        } else if(action === 'replace') {
            newArr = oldArr.map(({key,val})=>({key: key, val: val == prevV ? currV : val}))
        } else if(action === 'add') {
            oldArr.push({key: uuid(), val: currV})
            newArr = oldArr
        }
        this.setState({
            ...this.state,
            [set]:newArr
        })
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
                {/*Haldusvaade*/}
                {this.state.activeTab === 'haldus' ?
                   DetailsTab([
                       {key: "Loomise kuupäev: ", value: this.props.created_timestamp.split("T")[0],
                           name: 'creation_date'},
                       {key: "Projektijuht: ", value: this.props.projektijuht,
                           name: 'projektijuht'},
                       {key: "Metsameister: ", value: this.props.metsameister,
                           name: 'metsameister'},
                       {key: "Kontakt: ", value: this.props.kontakt,
                           name: 'eeee'}, //Puudu?!

                       {key: "E-post: ", value: this.props.esindajad.join(', '),
                           name: 'esindajad', editable: this.props.esindajad},

                       {key: "Katastritunnus: ", value: this.props.katastritunnused.map(n=>n.tunnus).join(', '),
                            name: 'katastritunnused', editable: this.props.katastritunnused.map(n=>n.tunnus)},

                       {key: "Raie teostamine: ", value: this.props.raie_teostamine},
                       {key: "Metsamaterjali väljaviimine: ", value: this.props.materjali_viimine},
                       {key: "Raidmete väljaviimine: ", value: this.props.raidmete_viimine},

                   ], false,this.onChangeSets) : null
                }
                {/*Lepinguvaade*/}
                {this.state.activeTab === 'leping' ?
                    this.props.documents.contracts ?
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
const DetailsTab = (data=[], nonFileRow = false, changeFunc) => {
    let createNonFileRow = n => (
        <FileRow key={n.key} plainText plainKey={n.key} plainValue={n.value||<Missing/>}
                 name={n.name} editable={n.editable||false} changes={changeFunc}/>
    )
    let createDocumentRow = n => <FileRow fileName={n.filename} key={n.filename}/>
    return nonFileRow===false ? (data.map(createNonFileRow)) : (data.map(createDocumentRow))
};

const Missing = () => <span className="FileRow__missing-value">Puudub</span>;

const EmptyTab = () =>
    <div className="DetailsWrapper__missing-data-tab">
        <div className="DetailsWrapper__upload-link">Lisa fail..</div>
    </div>

//const prettyPrint = (arr) => arr.reduce((acc, val, index)=>{acc+=(index<1||index==arr.length-1?'':' ,')+val},'');
const uuid = () => {
    var i, random;
    var uuid = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }

        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }

    return uuid;
}