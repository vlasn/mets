/**
 * Created by clstrfvck on 16/06/2017.
 */

import React, {Component} from "react"
import {Close} from "../../Icons"
const css = require('./Chip.scss')

export default class EditableChip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isBeingEdited: false,
            clickedOnce: false,
            value: '',
            prevValue: ''
        }
        this.submit = this.submit.bind(this)
        this.click = this.click.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.onInputSubmit = this.onInputSubmit.bind(this)
        this.remove = this.remove.bind(this)
    }
    submit(value,prev,from) {
        this.props.submit(value,prev,from);
    }
    componentDidMount(){
        this.setState({
            ...this.state,
            value: this.props.value,
            isBeingEdited: this.props.value.length===0
        })
    }

    onInputSubmit(e) {
        if(e.key==='Enter'){
            //this.submit(this.props.value,this.state.value);
            this.setState({
                ...this.state,
                isBeingEdited: false,
                value: this.state.value
            })
            this.props.submit(this.props.name,this.state.value)
        }
    }
    remove(){
        this.props.remove(this.props.value)
    }

    onInputChange(e) {
        this.setState({
            ...this.state,
            value: e.target.value
        })
    }

    click(){
        !this.props.static ?
            this.props.editable ? this.setState({
                ...this.state,
                isBeingEdited: true
            }) : null
        :this.props.clicked()
    }

    render(){
        return(
            <div className={`EditableChip__wrapper ${this.props.static?'static':''}`}>
                <div className="EditableChip__content" onClick={this.click.bind(this)}>
                    {!this.state.isBeingEdited ?
                        <div className="EditableChip__text">{this.state.value}</div> :
                        <input className="EditableChip__input" type="text"
                               name={this.props.name} value={this.state.value}
                               onKeyPress={this.onInputSubmit} onChange={this.onInputChange}
                        />
                    }
                </div>
                {
                    this.props.deletable ?
                        <div className="EditableChip__delete" onClick={this.remove}>x</div>
                        :null
                }
            </div>

        )
    }
}
