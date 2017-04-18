/**
 * Created by henrysavi on 12/04/17.
 */
import React from "react"
import InputField from "./InputField"
import WideButton from "./WideButton"
const css = require("./FirstPassword.scss")



export default class FirstPassword extends React.Component {
    render() {
        return(
           <div>
               <div className = "FirstPasword__wrapper">
                   <h1>Vali endale salasõna</h1>
                   <InputField labelText = "Parool uuesti" name = "password" type="password" updateValue = {this.updateValue}/>
                   <InputField labelText = "Parool uuesti" name = "passwordAgain" type = "password" updateValue = {this.updateValue}/>
                   <WideButton name = "button" text = "Mine metsa!"/>
               </div>

           </div>
        )
    }
}