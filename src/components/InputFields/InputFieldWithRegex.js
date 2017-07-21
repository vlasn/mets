import React, {Component} from "react"
import InputField from "./InputField"

class InputFieldWithRegex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            edited: false
        }
        this.onChangeValue = this.onChangeValue.bind(this)
    }
    onChangeValue(name, value) {
        let errored = !this.props.regex.test(value)
        value.length>0 ?
            this.setState({edited: true, error: errored}) :
            this.setState({edited: false, error: false})
        if(!errored) this.props.onChange(name, value);
    }
    render() {
        return(
            <InputField
                {...this.props}
                error={this.state.error && this.state.edited}
                onChange={this.onChangeValue}
            />
        )
    }
}

export default InputFieldWithRegex