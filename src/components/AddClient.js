/**
 * Created by henrysavi on 12/06/17.
 */
import React from "react"
import InputField from "./InputField"
import InputFieldOptions from "./InputFieldOptions"


const css = require("./AddClient.scss");



export default class AddClent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Katastritunnus:[1],
            Kliendi_esindaja:[1]
        }
        //let args= this.state

        this.addToArray=this.addToArray.bind(this)
        this.removeFromArray=this.removeFromArray.bind(this)
    }

    addToArray(index,arrayName) {
        let newArr = [...this.state[arrayName], index]
        this.setState({
            ...this.state,
            [arrayName]: newArr
        })
        console.log(this.state[arrayName])
    }

    removeFromArray(index,arrayName) {
        //console.log(this.state.Katastritunnus)

        if (this.state[arrayName].length > 1) {
            this.state[arrayName].splice( this.state[arrayName].indexOf(index), 1 )
            console.log(this.state[arrayName])
            this.setState({
                ...this.state,
                [arrayName]: this.state[arrayName]
            })
        }
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