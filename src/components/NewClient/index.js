/**
 * Created by clstrfvck on 13/06/2017.
 */
import React,  { Component } from "react"
import { connect } from 'react-redux'
import axios from "axios"
import CreateClient from './NewClient'
import CardWideButton from "../FieldCard/CardWideButton"
import { changePersonType, onFieldValueChange, onSubmitNewClient } from "./clientCreationActions"

class NewClient extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(newProps) {
        newProps.submitted ? this.props.history.push("/") : null
    }

    render(){
        return(
            <div>
                <h1>Uus klient</h1>
                <CreateClient{...this.props}/>

                {this.props.error /*FIXME - @hensav @thetloffline this needs styling and probably a separate component*/}

                <CardWideButton value="Loo uus klient"
                                callback={()=>this.props.onSubmitNewClient(this.props.activeTab, this.props.details)}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeTab: state.creation.clientCreation.activeTab,
        loading: state.creation.clientCreation.loading,
        submitted: state.creation.clientCreation.submitted,
        error: state.creation.clientCreation.error,
        details: state.creation.clientCreation.details
    };
};

export default connect(
    mapStateToProps,
    {changePersonType, onFieldValueChange, onSubmitNewClient}
)(NewClient);