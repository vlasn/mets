/**
 * Created by clstrfvck on 18/06/2017.
 */
import React, {Component} from "react"
import PriceFormDropdown from "./PriceFormDropdown"
const css = require('./PriceList.scss')

export default class Row extends Component{
    constructor(props) {
        super(props)
        this.kPress = this.kPress.bind(this)
    }

    kPress(event) {
        if(event.key ==='Enter') {
            console.log('row:', this.props)
            this.props.returnValue(this.props.name, event.target.value)
            this.CustomValue.blur()
        }
    }

    checkExtras(input, extra=false) {
        if(extra){
            input = input.split("-")[extra==='priceGrpMin' ? 0 : 1]
        }
        return typeof(input)!=='string' ? input.toString() : input
    }
    updateInput(val) {
        this.CustomValue.value = val
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
                        prevValue={this.checkExtras(this.props.prevValue, this.props.extra)}
                        getOpts={this.props.getOpts}
                        dbKey={this.props.dbKey}
                        returnValue={this.props.returnValue}
                        options={this.props.foundOpts}
                        enum={this.props.enum}
                        extra={this.props.extra}
                        updateInput={this.updateInput.bind(this)}
                    />
                </div>
                <div className="PriceListTable__editable-column value">
                    <input
                        className="PriceListTable__editable-input"
                        type="text"
                        placeholder={this.checkExtras(this.props.prevValue, this.props.extra)}
                        ref={(input) => {this.CustomValue = input} }
                        onKeyPress={this.kPress}
                    />
                </div>
            </div>
        )
    }
}
    
