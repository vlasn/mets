/**
 * Created by henrysavi on 12/06/17.
 */
import React from "react"
import InputField from "../InputFields/InputField"
import InputFieldOptions from "../InputFields/InputFieldOptions"
import AddDocuments from "./AddDocuments"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from '../InputFields/DatePicker';
import FlatButton from 'material-ui/FlatButton';

const css = require("./AddContract.scss");
const labelStyles = {
    headerButton: {
        color: 'black'
    }
}

const styles = {
    regularbutton: {
        float: 'left',
        width: "161px",
        display:'inline-block',
        boarderRadius:'0px',
        margin: "10px",
    },
    longbutton: {
        
        padding: '0px 50px 0px 50px',
        display:'inline-block',
        boarderRadius:'0px',
        width: "390px",
    }

};


export default class AddContract extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            Katastritunnus:[{value:"", name:"Katastritunnus"}],
            Kliendi_esindaja:[{value:"", name:"Kliendi_esindaja"}],
            contract:[],
            forestNotice:[]
        }
        this.addToArray=this.addToArray.bind(this)
        this.removeFromArray=this.removeFromArray.bind(this)
        this.updateKatastritunnus = this.updateKatastritunnus.bind(this);
        this.updateKliendiesindaja = this.updateKliendiesindaja.bind(this);


        this.handleContractFiles=this.handleContractFiles.bind(this)
         this.handleNoticeFiles=this.handleNoticeFiles.bind(this)
    }
    handleContractFiles = contract => {
        console.log(contract)
        let newFiles = []

        for(let i = 0; i<contract.length; i++) {
            newFiles.push(contract[i])
        }
        this.setState({
            ...this.state,
            contract:[...this.state.forestNotice, ...newFiles]
        })
    }
    handleNoticeFiles = forestNotice => {
        console.log(forestNotice)
        let newFiles = []

        for(let i = 0; i<forestNotice.length; i++) {
            newFiles.push(forestNotice[i])
        }
        this.setState({
            ...this.state,
            forestNotice:[...this.state.forestNotice, ...newFiles]
        })
    }

    updateKatastritunnus(name,value){
        console.log("lisaname:",name,value)
        let newKat = this.state.Katastritunnus.map(item=>{
            if(item.name === name){
                return {name: item.name, value: value}
            }
            else {return item}
        })
        this.setState({
            ...this.state,
            Katastritunnus: newKat
        });

    }
    updateKliendiesindaja(name,value){
        console.log("lisaname:",name,value)
        let newKat2 = this.state.Kliendi_esindaja.map(item=>{
            if(item.name === name){
                return {name: item.name, value: value}
            }
            else {return item}
        })
        this.setState({
            ...this.state,
            Kliendi_esindaja: newKat2
        });

    }

    addToArray(timestamp,fromArray) {
        let newArr = [...this.state[fromArray], {value: "", name: timestamp}]
        this.setState({
            ...this.state,
            [fromArray]: newArr
        });
    }

    removeFromArray(name,arrayName) {
        let checkContent = (item)=>{
            return (item.name !== name)
        };
        let newArr = this.state[arrayName].filter((item)=>checkContent(item));

        this.setState({
            ...this.state,
            [arrayName]: newArr
        })
    }

    render() {
        console.log(this.state)
        return(

            <div className="AddContract__wrapper">
                <div className="Heading"><h1>Lisa kliendi andmed</h1></div>
                <div className="generalDetails">
                    <InputField
                        floatingLabelText={"Kinnistu nimi"}
                        hintText={"Mingi Nimi"}
                        name="propertyName"
                        onChange={this.props.onFieldValueChange}
                        errorText={this.props.errors.propertyName}
                    />

                    {this.state.Katastritunnus.map((row,index)=>{
                        return(<InputFieldOptions
                            index={index}
                            key ={row.name}
                            floatingLabelText={"Katastritunnus"}
                            hintText={"23124234"}
                            add={this.addToArray}
                            remove={this.removeFromArray}
                            fromArray={"Katastritunnus"}
                            onChange = {this.updateKatastritunnus}
                            name={row.name}
                            value={row.value}
                            errorText={this.props.errors.cadastre}
                        />)
                    })}
                    {this.state.Kliendi_esindaja.map((row,index)=>{
                        return(<InputFieldOptions
                            index={index}
                            key ={row.name}
                            floatingLabelText={"Kliendi esindaja"}
                            hintText={"vello.veskimets@gmail.com"}
                            add={this.addToArray}
                            remove={this.removeFromArray}
                            fromArray={"Kliendi_esindaja"}
                            updateValue = {this.updateKliendiesindaja}
                            name={row.name}
                            value={row.value}
                            errorText={this.props.errors.email}
                        />)
                    })}
                    <InputField
                        floatingLabelText={"Projekti juht"}
                        hintText={"Projekti Juhan"}
                        onChange={this.props.onFieldValueChange}
                        name="projectManager"
                        errorText={this.props.errors.projectManager}

                    />
                    <InputField
                        floatingLabelText={"Metsameister"}
                        hintText={"Meistri Mees"}
                        onChange={this.props.onFieldValueChange}
                        name="forestMaster"
                        errorText={this.props.errors.forestMaster}

                    />
                </div>

                <MuiThemeProvider>
                    
                        <div className="dateDetails">
                        <div className="Heading"><h1>Lisa kuupäevad</h1></div>
                        <div className="Calendar" >
                            <DatePicker
                                floating="Raie"
                                DateTimeFormat={Intl.DateTimeFormat}
                                locale="et-EE"
                                change={this.props.onFieldValueChange}
                                name="cuts"
                                errorText={this.props.errors.cuts}
                            />
                            <DatePicker
                                floating="Väljavedu"
                                DateTimeFormat={Intl.DateTimeFormat}
                                locale="et-EE"
                                change={this.props.onFieldValueChange}
                                name="export"
                                errorText={this.props.errors.export}
                            />
                            <DatePicker
                                floating="Raidmete väljavedu"
                                DateTimeFormat={Intl.DateTimeFormat}
                                locale="et-EE"
                                change={this.props.onFieldValueChange}
                                name="cutsExport"
                                errorText={this.props.errors.cutsExport}
                            />
                        </div>

                        <AddDocuments
                            handleContractFiles= {this.handleContractFiles}
                            handleNoticeFiles= {this.handleNoticeFiles}
                        />
                        {/*<div>{this.props.errors.contract}</div>*/}
                        {/*<div>{this.props.errors.forestNotice}</div>*/}

                        <div className="Uploads__wrapper">
                            {this.state.contract.map((row)=><div className="Uploads">{row.name}</div>)}
                            {this.state.forestNotice.map((row)=><div className="Uploads">{row.name}</div>)}
                        </div>
                       
                        <div className="Big__button">
                            <FlatButton
                                label='Loo leping'
                                backgroundColor= "#9bfcd3"
                                hoverColor = "#9bfcd3"
                                labelStyle ={labelStyles.headerButton}
                                style={styles.longbutton}
                                onClick={()=>this.props.onSubmit({
                                    ...this.props.contractDetails,
                                    kinnistu: {
                                        nimi: this.props.contractDetails.propertyName,
                                        katastritunnused: [...this.state.Katastritunnus.map(n=>n.value)]
                                    },
                                    esindajad:[...this.state.Kliendi_esindaja.map(n=>n.value)],
                                    documents: {
                                        contract: [this.state.contract],
                                        forestNotice: [this.state.forestNotice]
                                    }
                                })}
                            />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>

        )
    }
}