/**
 * Created by henrysavi on 12/04/17.
 */
import React from "react"
import LoginTextField from "./LoginTextField"
import LoginButton from "./LoginButton"
import Error from "./Error"
const styles = {
    container: {
        display: 'block',
        boxSizing: 'border-box',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '50%',
        alignContent: 'center',
    },
}

const labelStyles = {
    headerButton: {
        color: 'white'
    }
}

export default class FirstPassword extends React.Component {
    constructor(props){
        super(props)
    }

    handleSubmit() {
        this.props.resetPassword(
            this.props.password,
            this.props.cpassword,
            this.props.hash,
        )
    }

    render() {
        return(
           <div style={styles.container}>

               <h1>Vali endale salasõna</h1>
               <LoginTextField
                   hintText="Parool"
                   type = "password"
                   fullWidth={true}
                   updateValue = {this.props.credentialChange}

               />
               <LoginTextField
                   hintText="Parool uuesti"
                   type = "password"
                   fullWidth={true}
                   updateValue = {this.props.credentialChange}

               />
               <LoginButton
                   style={styles.button}
                   backgroundColor= "#00CC33"
                   hoverColor = "#009933"
                   labelStyle ={labelStyles.headerButton}
                   submitHandler = {this.handleSubmit.bind(this)}
                   label="Mine metsa!"
               />
               {this.props.error ? <Error text = {this.props.error}/> : null}

           </div>

/*
           <div className = "FirstPassword__wrapper">
            <h1>Vali endale salasõna</h1>
        <InputField labelText = "Parool" name = "password" type="password" updateValue = {this.props.credentialChange}/>
    <InputField labelText = "Parool uuesti" name = "cpassword" type = "password" updateValue = {this.props.credentialChange}/>
        {this.props.error ? <Error text = {this.props.error}/> : null}
        <WideButton name = "button" text = "Mine metsa!" submitHandler = {this.handleSubmit.bind(this)}/>
        </div>
        */
        )

    }
}