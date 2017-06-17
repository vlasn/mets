/**
 * Created by clstrfvck on 17/06/2017.
 */
import React, {Component} from "react"
const css = require("./PriceListTable.scss")
import Row from "./PriceListRow"

export default class PriceListTable extends Component {
    constructor(props) {
        super(props)
    }
    onReturnedValue() {
        console.log(arguments)
    }
    getOpts(){
        return setTimeout(()=>{
            return ['foo','bar', 'baz', 'qux','foo','bar', 'baz', 'qux','foo','bar', 'baz', 'qux']
        }, 300)
    }
    render(){
        return(
            <div className="PriceListTable__wrapper">
                <div className="PriceListTable__header">header</div>
                <div className="PriceListTable__content">
                    <div className="PriceListTable__editable-wrapper">
                        <Row _key="Parameeter" name="parameter" prevValue={samples.a}
                             returnValue={this.onReturnedValue} getOpts={this.getOpts}/>
                        <Row _key="Diameeter" name="parameter" prevValue={samples.b}
                             returnValue={this.onReturnedValue} getOpts={this.getOpts}/>
                    </div>
                </div>
            </div>
        )
    }
}
const samples = {
    a: "Testin",
    b: "Väärtusi"
}