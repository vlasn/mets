/**
 * Created by clstrfvck on 13/06/2017.
 */
import React from "react"
import { connect } from 'react-redux'
import axios from "axios"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Redirect from 'react-router-dom'
import CreateClient from '../CreateClient'

class NewClient extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(newProps) {
        newProps.submitted ? this.props.history.push("/") : null
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
            let errors = {}
            let emailValidation = /\S+@\S+\.\S+/
            let nameValidation = /^[A-Za-z ]{3,20}$/
            let addressValidation = /^[A-Za-z0-9 ]{3,20}$/
            let contactValidation = /^[0-9]{5,20}$/
            let documentIdValidation = /^[0-9 ]{3,20}$/
            let personalIdValidation = /^[0-9 ]{11,11}$/
            let companyRegistrationValidation = /^[0-9 ]{8,8}$/
            let vatDutyNumberValidation = /^[0-9 ]{14,14}$/

            dispatch({type: 'CREATION_ATTEMPT'})

            if(details.type==='privatePerson')  {

                if(!nameValidation.test(details.name))  {
                    errors.name = 'Sisesta korrektne nimi';
                }else {errors.name}

                if(!personalIdValidation.test(details.personalId))  {
                      errors.personalId = 'Sisesta korrektne isikukood';
                }else {errors.personalId}

                if(!documentIdValidation.test(details.documentId))  {
                    errors.documentId = 'Sisesta korrektne dokumendi number';
                }else {errors.documentId}

                if(!emailValidation.test(details.email))  {
                    errors.email = 'Sisesta korrektne email';
                }else {delete errors.email}

                if(!contactValidation.test(details.contact))  {
                    errors.contact = 'Sisesta korrektne telefoninumber';
                }else {delete errors.contact}

                if(!addressValidation.test(details.address))  {
                    errors.address = 'Sisesta korrektne aadress';
                }else {delete errors.address}
            }

            if(details.type==='juridicalPerson') {
                if(!nameValidation.test(details.name))  {
                    errors.name = 'Sisesta korrektne nimi';
                }else {delete errors.name}

                if (!companyRegistrationValidation.test(details.name)) {
                 errors.companyRegistration = 'Sisesta korrektne registrinumber';
                }else {delete errors.companyRegistration}

                if (!vatDutyNumberValidation.test(details.name)) {
                 errors.vatDutyNumber = 'Sisesta korrektne käibemaksukohustuslase number';
                }else {delete errors.vatDutyNumber}

                if(!emailValidation.test(details.email))  {
                    errors.email = 'Sisesta korrektne email';
                }else {delete errors.email}

                if(!contactValidation.test(details.contact))  {
                 errors.contact = 'Sisesta korrektne telefoninumber';
                }else {delete errors.contact}

                if(!addressValidation.test(details.address))  {
                 errors.address = 'Sisesta korrektne aadress';
                }else {delete errors.address}
            }
            console.log("errorid",errors)
            if(Object.keys(errors).length<1){
                axios.post('/api/user/create', {
                    email: details.email,
                    personal_data: {
                        nimi: details.name,
                        tel_nr: details.contact,
                        aadress: details.address,
                        isikukood: details.personalId,
                        dok_nr: details.documentId,
                        eraisik: (details.type==='privatePerson'),
                        juriidiline_isik: (details.type==='juridicalPerson'),
                        reg_nr: details.companyRegistration,
                        kmk_nr: details.vatDutyNumber
                    }
                })
                    .then(({data})=>{
                    console.log(data)
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
            } else {
                console.log('dispatching')
                dispatch({
                    type: "CREATION_FIELD_ERROR",
                    payload: errors
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
        errors: state.clientManagement.creation.errors,
        details: state.clientManagement.creation.details
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewClient);