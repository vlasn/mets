//reusable component for form text fields
import React from "react"
import TextField from 'material-ui/TextField';

const styles = {
    underlineStyle: {
        borderColor: '#9bfcd3',
    },

    floatingLabelFocusStyle:{
        color: 'black',
    }
};

export default class LoginTextField extends React.Component{
    constructor(props) {
        super(props);
        this.textChangeHandler = this.textChangeHandler.bind(this);
    }

    textChangeHandler(event) {
        this.props.updateValue(
            this.props.name, event.target.value
        );
    }

    render(){
        return(
            <div>
                <TextField
                    id={this.props.name}
                    type={this.props.type}
                    className = "InputField__input"
                    name = {this.props.name}
                    onChange={(event)=>this.textChangeHandler(event)}
                    hintText={this.props.hintText}
                    fullWidth={this.props.fullWidth}
                    errorText = {this.props.errorText}
                    underlineFocusStyle={styles.underlineStyle}
                    floatingLabelText={this.props.floatingLabelText}
                    floatingLabelFixed={true}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
            </div>
        );
    }
}