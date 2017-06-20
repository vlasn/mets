/**
 * Created by clstrfvck on 20/06/2017.
 */
import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchImportedPriceLists, submitXlsx } from "../../../actions/priceListActions"
const css = require("./ImportHistory.scss")

const styles = {
    Big__button: {
        display:'inline-block',
        boarderRadius:'0px',
        width: "840px",
        height: "40px"
    }
}

class ImportHistory extends Component{
    constructor(props) {
        super(props)
        this.navigateToImport = this.navigateToImport.bind(this)
    }

    componentWillMount() {
        console.log("importhistory:", this.props)
        this.props.imports.length<1 ? this.props.fetchImportedPriceLists() : null
    }

    componentWillReceiveProps(newProps) {
        if(newProps.redirectToResolve) {
            this.props.history.push("/import/"+newProps.currentlyBeingEdited)
        }
    }

    navigateToImport(id) {
        console.log("navigating to import"+id)
        this.props.history.push("/import/"+id)
    }

    attemptUpload() {
        let formData = new FormData
        let files = this.fileInput.files
        for (var key in files) {
            if (files.hasOwnProperty(key) && files[key] instanceof File) {
                formData.append('file', files[key]);
            }
        }
        this.props.submitXlsx(formData)
    }

    render() {
        return(
            <div className="ImportHistory__wrapper">
                <h1>Mõõteraportid</h1>
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
                <div className="Big__button">
                    <label htmlFor="file">
                        <div className="ImportHistory__button">+  Impordi uus mõõteraport</div>
                    </label>
                    <input
                        id="file"
                        type="file"
                        name="file"
                        className="hide"
                        ref={(input) => {this.fileInput = input}}
                        onChange={this.attemptUpload.bind(this)}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        imports: state.priceList.imports,
        redirectToResolve: state.priceList.redirectToResolve,
        currentlyBeingEdited: state.priceList.currentlyBeingEdited
    }
}

export default connect(mapStateToProps, { fetchImportedPriceLists, submitXlsx })(ImportHistory)
