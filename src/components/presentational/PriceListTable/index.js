/**
 * Created by clstrfvck on 17/06/2017.
 */
import React, {Component} from "react"
import { connect } from "react-redux"
import { importRequest, selectEditable } from "../../../actions/priceListActions"
const css = require("./PriceList.scss")
import Table from "./PriceListTable"

class PriceListTable extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        if(!this.props.match.params.id) {
            this.props.history.push("/")
        } else {
            this.props.importRequest(this.props.match.params.id)
        }

    }
    render(){
        return(
            <div className="PriceListTable__wrapper">
                <div className="PriceListTable__above">Siia tuleb tekst?</div>
                <div className="PriceListTable__content">
                    <Table items = {this.props.mismatches}
                           currentlyBeingEdited = {this.props.currentlyBeingEdited}
                           selector = {this.props.selectEditable}
                    />
                </div>
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

export default connect(mapStateToProps, { importRequest, selectEditable })(PriceListTable)