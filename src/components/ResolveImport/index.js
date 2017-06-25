/**
 * Created by clstrfvck on 17/06/2017.
 */
import React, {Component} from "react"
import { connect } from "react-redux"
import { fetchSinglePricelist, selectEditable, transmitParent } from "../../actions/priceListActions"
const css = require("./PriceList.scss")
import Table from "./PriceListTable"

class PriceListTable extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        !this.props.loggedIn ? this.props.history.push("/login"): null
        if(!this.props.match.params.id) {
            this.props.history.push("/")
        } else {
            this.props.fetchSinglePricelist(this.props.match.params.id)
            this.props.transmitParent(this.props.match.params.id)
        }

    }
    render(){
        return(
            <div className="PriceListTable__wrapper">
                <div className="PriceListTable__above"><h2>{this.props.meta.name||"Faili nimi puudub"}</h2></div>
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

const mapStateToProps = function(state, ownProps) {
    return {
        mismatches: state.priceList.mismatches,
        loading: state.priceList.loading,
        error: state.priceList.error,
        currentlyBeingEdited: state.priceList.currentlyBeingEdited,
        currentlyEditedName: state.priceList.currentlyEditedName,
        meta: state.priceList.meta,
        loggedIn: state.user.loggedIn
    }
}

export default connect(mapStateToProps, { fetchSinglePricelist, selectEditable, transmitParent })(PriceListTable)