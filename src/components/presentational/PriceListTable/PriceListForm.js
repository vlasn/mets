/**
 * Created by clstrfvck on 18/06/2017.
 */
import React, {Component} from "react"
import { connect } from "react-redux"
import { getOptions } from "../../../actions/priceListActions"


class PriceListForm extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <section>

            </section>
        )
    }
}



export default connect(mapStateToProps, {getOptions})(PriceListForm)