import React, { Component } from "react"
import TextField from "material-ui/TextField"
import "./InputWithAutocomplete.scss"

const sampleOptions = [
    { name: "Väino", id: 10 },
    { name: "Valdur", id: 12 }
]

export default class InputAutocompleteWrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            optionsOpen: false,
            trackedValue: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onOptionClick = this.onOptionClick.bind(this)

    }

    onChange(x, value) {
        this.setState(state => ({ trackedValue: value, optionsOpen: value.length>2 }))
        if(value.length>2) {
            this.props.fetch(value)
        }
    }
    onFocus() {
        if(this.state.trackedValue.length>2) {
            this.setState(state => ({optionsOpen: true}))
        }
    }
    onOptionClick(id, value) {
        console.log(id)
        this.setState(state => ({optionsOpen: false, trackedValue: value}))
        //this.props.onChange(this.props.name, value (or id) ) //=> Submit the option to Redux store
        this.props.onChange(this.props.name, value, id)
    }

    render() {
        return (
            <div className="Autocomplete__wrapper">
                <TextField
                    name={this.props.name}
                    hintText={this.props.hintText}
                    fullWidth={true}
                    errorText = {this.props.errorText}
                    underlineFocusStyle={{borderColor: this.props.error?"#de2b31":"#3FD369"}}
                    floatingLabelText={`${this.props.floatingLabelText}${this.props.required?" *":""}`}
                    floatingLabelStyle={this.props.error?{color: "red"}:null}
                    floatingLabelFocusStyle={{color: "black"}}
                    onChange={(event)=>this.onChange(this.props.name,event.target.value)}
                    onFocus={this.onFocus}
                    value={this.state.trackedValue}
                />
                { this.state.optionsOpen && <div className="Autocomplete__options-wrapper">
                    { this.props.options.length>0 ?
                        this.props.options
                        .filter(f=>true) //TODO: consider filtering existing data as an optimistic UI update vs always waiting for server
                        .map(opt =>
                            <AutocompleteOption
                                name={opt.name}
                                id={opt.id}
                                identityCode={opt.identityCode}
                                key={opt.id}
                                callback={this.onOptionClick}
                            /> ) : (
                            <AutocompleteOption
                                name="Klienti ei leitud"
                                id="0"
                                callback={f=>f}
                            />
                        )}
                </div> }
            </div>
        )
    }
}

const AutocompleteOption = ({ name, id, identityCode ,callback = console.log }) => (
    <div className="Autocomplete__option" onClick={ () => callback(id, name) }>
        { `${name} ${id!="0" ? "("+identityCode+")" : "" }` }
    </div>
)