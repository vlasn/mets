import React, { Component } from "react"
import { connect } from "react-redux"
import _NewContract from "./NewContract"
import { fetchPersonDropdownOptions, addRepresentative, removeRepresentative,
    updateRepresentative, onDefaultFieldChange, resetContractCreation, uploadFile,
    removeFile} from "./contractCreationActions"

class NewContract extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.resetContractCreation()
    }

    render() {
        return <_NewContract {...this.props}/>
    }
}

const mapStateToProps = (state, ownProps) => ({
    representatives: state.creation.contractCreation.representatives,
    loading: state.creation.contractCreation.loading,
    searchResults: state.creation.contractCreation.searchResults,
    documents: state.creation.contractCreation.documents
})

export default connect(mapStateToProps, {
    fetchPersonDropdownOptions, addRepresentative, removeRepresentative,
    updateRepresentative, onDefaultFieldChange, resetContractCreation,
    uploadFile, removeFile
})(NewContract)