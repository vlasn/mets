/**
 * Created by clstrfvck on 13/06/2017.
 */
import React from "react"
import { connect } from 'react-redux'
//import { passwordChange, credentialChange, verify } from '../actions/validationActions'
import axios from "axios"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Redirect from 'react-router-dom'
import CreateClient from '../CreateClient'

class NewClient extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <CreateClient{...this.props}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePersonType(personType){
            dispatch({type: 'CREATION_CHANGE_PERSON_TYPE', payload: personType});
            console.log('dispatched person type change')
        },
        onFieldValueChange(source, value) {
            dispatch({
                type: 'CREATION_CHANGE_FIELD_VALUE',
                payload: {
                    key: source,
                    value: value
                }
            })
        },
        onSubmit(details){
            if(details.name.length>3) /*and other val logic*/ {
                console.log('valid posting!')
                dispatch({type: 'CREATION_ATTEMPT'})
                axios.post('/api/user/create', {
                    email: details.email,
                    personal_data: {
                        nimi: details.name,
                        tel_nr: details.contact,
                        aadress: details.address,
                        dok_nr: details.documentId,
                        eraisik: (details.type==='privatePerson'),
                        juriidiline_isik: (details.type==='juridicalPerson'),
                        reg_nr: details.companyRegistration,
                        kmk_nr: details.vatDutyNumber
                    }
                })
                    .then(({data})=>{
                        if(data.status === 'accept') {
                            dispatch({type: 'CREATION_SUCCESS', payload: data.msg})
                        } else {
                            dispatch({type: 'CREATION_FAILURE', payload: data.msg})
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        dispatch({type: 'CREATION_FAILURE', payload: error})
                    })
            }
        }
    }
};

const mapStateToProps = (state) => {
    return {
        activeTab: state.clientManagement.creation.activeTab,
        loading: state.clientManagement.creation.loading,
        submitted: state.clientManagement.creation.submitted,
        error: state.clientManagement.creation.error,
        details: state.clientManagement.creation.details
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewClient);