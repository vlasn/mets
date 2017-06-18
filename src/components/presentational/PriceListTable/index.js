/**
 * Created by clstrfvck on 17/06/2017.
 */
import React, {Component} from "react"
import { connect } from "react-redux"
import { importRequest, selectEditable } from "../../../actions/priceListActions"
const css = require("./PriceListTable.scss")
import EditableRow from "./PriceFormRow"
import Table from "./PriceListTable"

class PriceListTable extends Component {
    constructor(props) {
        super(props)
    }
    onReturnedValue() {
        console.log(arguments)
    }
    getOpts(){
        // fetch options & branch them into Redux
    }
    render(){
        return(
            <div className="PriceListTable__wrapper">
                <div className="PriceListTable__above">{this.props.loading ? 'loading' : null}</div>
                <div className="PriceListTable__content">
                    Siia tekib paljude tulpadega tabel:
                    <Table items = {this.props.mismatches}
                           currentlyBeingEdited = {this.props.currentlyBeingEdited}
                           selector = {this.props.selectEditable}
                    />
                </div>
                <button onClick={this.props.importRequest}>click</button>
            </div>
        )
    }
}
const samples = {
    a: "Testin",
    b: "Väärtusi"
}

const mapStateToProps = function(state, ownProps) {
    return {
        mismatches: state.priceList.mismatches,
        loading: state.priceList.loading,
        error: state.priceList.error,
        currentlyBeingEdited: state.priceList.currentlyBeingEdited
    }
}

export default connect(mapStateToProps, {importRequest, selectEditable })(PriceListTable)