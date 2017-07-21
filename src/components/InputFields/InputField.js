import React from "react"
import TextField from 'material-ui/TextField';
import "./InputField.scss"

//FIXME - use const colors here

const InputField = props => (
    <div className = "InputField__wrapper">
        <TextField
            name={props.name}
            hintText={props.hintText}
            fullWidth={true}
            errorText = {props.errorText}
            underlineFocusStyle={{borderColor: props.error?"#de2b31":"#3FD369"}}
            floatingLabelText={props.floatingLabelText}
            floatingLabelStyle={props.error?{color: "red"}:null}
            floatingLabelFixed={true}
            floatingLabelFocusStyle={{color: "black"}}
            onChange={(event)=>props.onChange(props.name,event.target.value)}
        />
    </div>
)

export default InputField