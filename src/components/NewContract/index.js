import React, { Component } from "react"
import { connect } from "react-redux"
import _NewContract from "./NewContract"
import { fetchPersonDropdownOptions, addRepresentative, removeRepresentative,
    updateRepresentative, onDefaultFieldChange, resetContractCreation} from "./contractCreationActions"

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
    searchResults: state.creation.contractCreation.searchResults
})

export default connect(mapStateToProps, {
    fetchPersonDropdownOptions, addRepresentative, removeRepresentative,
    updateRepresentative, onDefaultFieldChange, resetContractCreation
})(NewContract)