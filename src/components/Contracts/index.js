import React, {Component} from "react"
import { connect } from 'react-redux'
import { search } from "../../actions/uiActions"
import { updateContractRow } from "./contractActions"
import ContractCards from "./ManageContracts"

class Contracts extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount() {
        //!this.props.loggedIn ? this.props.history.push("/login") : null
    }
    render(){
        return(<ContractCards {...this.props}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.contract.filter,
        data: state.contract.clientManagement.contracts,
        searchRequired: state.contract.clientManagement.searchRequired,
        loggedIn: state.user.loggedIn
        // contractRowLoading: state.editContract.contractRowLoading
    }
}

export default connect(
    mapStateToProps,
    { updateContractRow, search }
)(Contracts);