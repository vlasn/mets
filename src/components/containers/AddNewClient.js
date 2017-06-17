/**
 * Created by henrysavi on 16/06/17.
 */
import React from "react"
import { connect } from 'react-redux'
import axios from "axios"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Redirect from 'react-router-dom'
import AddClient from '../AddClient'

class AddNewClient extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <AddClient{...this.props}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFieldValueChange(source, value) {
            dispatch({
                type: 'CONTRACT_CREATION_CHANGE_FIELD_VALUE',
                payload: {
                    key: source,
                    value: value
                }
            })
        },
        onSubmit(contractDetails){
            //console.log(contractDetails)
            let errors = {}

            dispatch({type: 'CONTRACT_CREATION_ATTEMPT'})

            if(Object.keys(errors).length<1){
                axios.post('/api/contract/create', {
                    contractDetails: {
                        kinnistu_nimi: contractDetails.propertyName,
                        katastritunnus: contractDetails.cadastreId,
                        kliendi_esindaja: contractDetails.customerRepresentative,
                        projekti_juht: contractDetails.projectManager,
                        metsameister: contractDetails.forestMaster,
                        raie: contractDetails.cuts,
                        valjavedu: contractDetails.export,
                        raidmete_valjavedu: contractDetails.cutsExport
                    }
                })
                    .then(({data})=>{
                        if(data.status === 'accept') {
                            dispatch({type: 'CONTRACT_CREATION_SUCCESS', payload: data.msg})
                        } else {
                            dispatch({type: 'CONTRACT_CREATION_FAILURE', payload: data.msg})
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        dispatch({type: 'CONTRACT_CREATION_FAILURE', payload: error})
                    })
            } else {
                console.log('dispatching')
                dispatch({
                    type: "CONTRACT_CREATION_FIELD_ERROR",
                    payload: errors
                })
            }
        }
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.contractManagement.creation.loading,
        submitted: state.contractManagement.creation.submitted,
        errors: state.contractManagement.creation.errors,
        contractDetails: state.contractManagement.creation.contractDetails

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewClient);