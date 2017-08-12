import { connect } from "react-redux"
import NewContract from "./NewContract"
import { fetchPersonDropdownOptions, addRepresentative, removeRepresentative, updateRepresentative } from "./contractCreationActions"


const mapStateToProps = (state, ownProps) => ({
    representatives: state.creation.contractCreation.representatives,
    loading: state.creation.contractCreation.loading,
    searchResults: state.creation.contractCreation.searchResults
})

export default connect(mapStateToProps, {
    fetchPersonDropdownOptions, addRepresentative, removeRepresentative, updateRepresentative
})(NewContract)