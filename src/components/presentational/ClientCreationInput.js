import React from "react"
import TextField from "material-ui/TextField"

const _Input = (props) => {
    //props.name
    //props.label
    //props.type
    //props.error
    //style
    let onChange = (e)=>{
        props.onChange(props.name, e.target.value)
    }
    let style = {
        underlineStyle: {
            borderColor: '#00CC33',
        },
        floatingLabelFocusStyle:{
            color: 'black',
        }
    };
    return(
        <TextField
            floatingLabelText={props.label}
            name={props.name}
            underlineFocusStyle={style.underlineStyle}
            floatingLabelFocusStyle={style.floatingLabelFocusStyle}
            floatingLabelFixed={true}
            fullWidth={true}
            onChange={onChange}
        />
    )
}


export default _Input