/**
 * Created by henrysavi on 12/06/17.
 */
import React from "react"
import InputField from "./InputField"
import InputFieldOptions from "./InputFieldOptions"
import AddDocuments from "./AddDocuments"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from './DatePicker';
import FlatButton from 'material-ui/FlatButton';


const css = require("./AddClient.scss");
const labelStyles = {
    headerButton: {
        color: 'white'
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
        float: 'left',
        padding: '0px 50px 0px 50px',
        display:'inline-block',
        boarderRadius:'0px',
        width: "400px",
    }

};


export default class AddClient extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            Katastritunnus:[{value:"", name:"Katastritunnus0"}],
            Kliendi_esindaja:[{value:"", name:"Kliendi_esindaja0"}],
        }
        this.addToArray=this.addToArray.bind(this)
        this.removeFromArray=this.removeFromArray.bind(this)
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(name,value){
        //console.log("lisaname:"+ name)

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
        //console.log(this.state)
    }

    addToArray(timestamp,fromArray) {
        let newArr = [...this.state[fromArray], {value: "", name: timestamp}]
        this.setState({
            ...this.state,
            [fromArray]: newArr
        });
        //console.log("omg:"+JSON.stringify(this.state[fromArray]))
    }

    removeFromArray(name,arrayName) {
        let checkContent = (item)=>{
            //console.log(item.name, name);
            return (item.name !== name)
        };
        let newArr = this.state[arrayName].filter((item)=>checkContent(item));
        //console.log('V6rdlus remove:',this.state[arrayName], newArr)

        this.setState({
            ...this.state,
            [arrayName]: newArr
        })
    }

    render() {

        return(

            <div className="AddClient__wrapper">
                <form onSubmit={e=>e.preventDefault()}>
                    <InputField floatingLabelText={"Kinnistu nimi"} hintText={"Mingi Nimi"}/>
                    {this.state.Katastritunnus.map((row,index)=>{
                        return(<InputFieldOptions
                            index={index}
                            key ={index}
                            floatingLabelText={"Katastritunnus"}
                            hintText={"23124234"}
                            add={this.addToArray}
                            remove={this.removeFromArray}
                            fromArray={"Katastritunnus"}
                            updateValue = {this.updateValue}
                            name={row.name}
                            value={row.value}
                        />)
                    })}
                    {this.state.Kliendi_esindaja.map((row,index)=>{
                        return(<InputFieldOptions
                            index={index}
                            key ={index}
                            floatingLabelText={"Kliendi esindaja"}
                            hintText={"Vello Veskimets juunior"}
                            add={this.addToArray}
                            remove={this.removeFromArray}
                            fromArray={"Kliendi_esindaja"}
                            updateValue = {this.updateValue}
                            name={row.name}
                            value={row.value}
                        />)
                    })}
                    <InputField floatingLabelText={"Projekti juht"} hintText={"Projekti Juhan"}/>
                    <InputField floatingLabelText={"Metsameister"} hintText={"Meistri Mees"}/>
                </form>
                <MuiThemeProvider>
                    <div>
                        <div className="Heading">Lisa kuupäevad</div>

                        <div className="Calendar" >
                            <DatePicker
                                floating="Raie"
                                DateTimeFormat={Intl.DateTimeFormat}
                                locale="et-EE"
                            />
                            <DatePicker
                                floating="Väljavedu"
                                DateTimeFormat={Intl.DateTimeFormat}
                                locale="et-EE"
                            />

                            <DatePicker
                                floating="Raidmete väljavedu"
                                DateTimeFormat={Intl.DateTimeFormat}
                                locale="et-EE"
                            />
                        </div>
                    </div>
                </MuiThemeProvider>
                <AddDocuments/>
            </div>
        )
    }
}