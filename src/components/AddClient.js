/**
 * Created by henrysavi on 12/06/17.
 */
import React from "react"
import InputField from "./InputField"
import InputFieldOptions from "./InputFieldOptions"
const css = require("./AddClient.scss");

export default class AddClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Katastritunnus:[{value:"", name:"Katastritunnus0"}],
            Kliendi_esindaja:[0],
            //value : "",
            //name:""
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
        console.log(this.state)
    }

    addToArray(timestamp,fromArray) {
        //let timestamp = Date.now()
        //console.log(timestamp)
        //let hash = require('crypto').createHash('sha256').update(Math.random()).digest('hex').substring(0, 8);
        //console.log(hash)
        /*
        console.log("tahan"+index)
        console.log("tahan2"+fromArray)
        let name = [fromArray]+(index+1)
        console.log("tahan3"+name)
        */
         //[this.props.fromArray]+(this.props.index+1),this.props.fromArray
        let newArr = [...this.state[fromArray], {value: "", name: timestamp}]
        this.setState({
            ...this.state,
            [fromArray]: newArr
        });
        console.log("omg:"+JSON.stringify(this.state[fromArray]))
        //console.log(this.state[arrayName].indexOf)

    }

    removeFromArray(name,arrayName) {
        //console.log("name: "+timestamp)
        //console.log("fromarray: "+fromArray)


        let checkContent = (item)=>{
            console.log(item.name, name);
            return (item.name !== name)
        };

        let newArr = this.state[arrayName].filter((item)=>checkContent(item));
        console.log('V6rdlus remove:',this.state[arrayName], newArr)

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
                        console.log(index)
                        return(<InputFieldOptions
                            index={index}
                            key ={index}
                            floatingLabelText={"Katastritunnus"}
                            hintText={"23124234"}
                            add={this.addToArray}
                            remove={this.removeFromArray}
                            fromArray={"Katastritunnus"}
                            updateValue = {this.updateValue}
                            timestamp={Date.now()}
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

                        />)
                    })}
                    <InputField floatingLabelText={"Projekti juht"} hintText={"Projekti Juhan"}/>
                    <InputField floatingLabelText={"Metsameister"} hintText={"Meistri Mees"}/>
                </form>
            </div>
        )
    }
}