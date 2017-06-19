import React, {Component} from "react"
import { connect } from 'react-redux'
import { search } from "../../actions/uiActions"
import { updateContractRow } from "../../actions/contractActions"
import ContractCards from "../ManageContracts"

class Contracts extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(<ContractCards {...this.props}/>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        searchTriggered(opt){
            dispatch({type: "SEARCH_TRIGGERED"});
            search(opt)
                .then(({data}) => {
                    if(data.status==='accept') {
                        dispatch({type: "SEARCH_COMPLETE", payload: data.data})
                    } else {
                        dispatch({type: "SEARCH_FAILED", payload: data.msg})
                    }
                })
                .catch(console.log)
        },
        contractRowUpdated(contractId,key,value,remove){
            dispatch({type: "UPDATE_CONTRACT_ROW_ATTEMPT",payload: {key: key}})
            updateContractRow(contractId,key,value)
                .then(({data}) => {
                    if(data.status==='accept') {
                        dispatch({type:"UPDATE_CONTRACT_ROW_SUCCESS", payload: {key: key}})
                        dispatch({type:"REFRESH_CONTRACT", payload: data.data})
                    } else {
                        dispatch({type:"UPDATE_CONTRACT_ROW_ERROR", payload: {key: key}})
                    }
                })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.clientManagement.cards.filter,
        data: state.clientManagement.contracts,
        searchRequired: state.clientManagement.searchRequired,
        // contractRowLoading: state.editContract.contractRowLoading
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contracts);