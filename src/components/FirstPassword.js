/**
 * Created by henrysavi on 12/04/17.
 */
import React from "react"
import InputField from "./InputField"
import WideButton from "./WideButton"
const css = require("./FirstPassword.scss")



export default class FirstPassword extends React.Component {
    constructor(props){
        super(props)
        this.error = null
    }
    componentWillReceiveProps() {
        console.log("component will receive props")
    }
    handleSubmit() {
        console.log("Now attempting to submit passwords..");
        console.log(this.props);
        this.props.newPassword(
            this.props.password,
            this.props.secondaryPass,
            this.props.hash,
            this.props.email
        )
    }
    componentDidMount() {
        if(this.props.error) {
            this.error = (
                <span className = "FirstPassword__error">{this.props.error}</span>
            )
        }
    }
    render() {
        return(
           <div>
               <div className = "FirstPassword__wrapper">
                   <h1>Vali endale salasõna</h1>
                   <InputField labelText = "Parool" name = "password" type="password" updateValue = {this.props.updateValue}/>
                   <InputField labelText = "Parool uuesti" name = "secondaryPass" type = "password" updateValue = {this.props.updateValue}/>
                   <WideButton name = "button" text = "Mine metsa!" submitHandler = {this.handleSubmit.bind(this)}/>
                   {this.error}
               </div>
           </div>
        )
    }
}