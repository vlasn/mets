/**
 * Created by henrysavi on 12/04/17.
 */
import React from "react"
import InputField from "./InputField"
import WideButton from "./WideButton"
const css = require("./FirstPassword.scss")
import Error from "./Error"



export default class FirstPassword extends React.Component {
    constructor(props){
        super(props)
    }

    handleSubmit() {
        this.props.resetPassword(
            this.props.password,
            this.props.secondaryPass,
            this.props.hash,
            this.props.email
        )
    }

    render() {
        return(
           <div>
               <div className = "FirstPassword__wrapper">
                   <h1>Vali endale salasõna</h1>
                   <InputField labelText = "Parool" name = "password" type="password" updateValue = {this.props.credentialChange}/>
                   <InputField labelText = "Parool uuesti" name = "secondaryPass" type = "password" updateValue = {this.props.credentialChange}/>
                   {this.props.error ? <Error text = {this.props.error}/> : null}
                   <WideButton name = "button" text = "Mine metsa!" submitHandler = {this.handleSubmit.bind(this)}/>
               </div>
           </div>
        )
    }
}