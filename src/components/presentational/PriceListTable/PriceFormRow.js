/**
 * Created by clstrfvck on 18/06/2017.
 */
import React, {Component} from "react"
import { connect } from "react-redux"
import PriceFormDropdown from "./PriceFormDropdown"
const css = require('./PriceList.scss') // to be moved to PriceListRow.scss?

export default class Row extends Component{
    constructor(props) {
        super(props)
        this.kPress = this.kPress.bind(this)
    }
    kPress(event) {
        if(event.key ==='Enter') {
            this.props.returnValue(this.props.name, event.target.value, true)
            this.CustomValue.blur()
        }
    }
    render(){
        return (
            <div className="PriceListTable__editable-row">
                <div className="PriceListTable__editable-column key">
                    <div className="PriceListTable__key-wrapper">
                        {this.props.ownKey || 'Missing ownKey!'}
                    </div>
                </div>
                <div className="PriceListTable__editable-column dropdown">
                    <PriceFormDropdown
                        name={this.props.pListKey}
                        prevValue={this.props.prevValue}
                        getOpts={this.props.getOpts}
                        returnValue={this.props.returnValue}
                        options={this.props.foundOpts}
                        enum={this.props.enum}
                    />
                </div>
                <div className="PriceListTable__editable-column value">
                    <input
                        className="PriceListTable__editable-input"
                        type="text"
                        placeholder={this.props.prevValue}
                        ref={(input) => {this.CustomValue = input} }
                        onKeyPress={this.kPress}
                    />
                </div>
            </div>
        )
    }
}
    
