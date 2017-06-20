/**
 * Created by clstrfvck on 20/06/2017.
 */
import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchImportedPriceLists } from "../../../actions/priceListActions"
const css = require("./ImportHistory.scss")

class ImportHistory extends Component{
    constructor(props) {
        super(props)
        this.navigateToImport = this.navigateToImport.bind(this)
    }

    componentWillMount() {
        console.log("importhistory:", this.props)
        this.props.imports.length<1 ? this.props.fetchImportedPriceLists() : null
    }
    navigateToImport(id) {
        console.log("navigating to import"+id)
        this.props.history.push("/import/"+id)
    }

    render() {
        return(
            <div className="ImportHistory__wrapper">
                {this.props.imports.map(row =>
                    <div
                        key={row._id}
                        className={`ImportHistory__row ${row.status}`}
                        onClick={()=>this.navigateToImport(row._id)}
                    >
                        <div className="ImportHistory__id">{row._id}</div>
                        <div className="ImportHistory__status">{row.status}</div>
                    </div>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        imports: state.priceList.imports
    }
}

export default connect(mapStateToProps, {fetchImportedPriceLists})(ImportHistory)