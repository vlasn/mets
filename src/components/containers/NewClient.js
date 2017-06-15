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

            let emailValidation = /\S+@\S+\.\S+/
            let errors = {}

            dispatch({type: 'CREATION_ATTEMPT'})

            if(!emailValidation.test(details.email))  {
                errors.email = 'Oih';
            }
            /*
            if(details.name<3)  {
                errors.push('name')
                // dispatch({
                //     type: "CREATION_FIELD_ERROR",
                //     payload: {
                //         key: "name",
                //         email: "Sisesta korrekne nimi"
                //     }
                // })
            }

            if(details.contact<5)  {
                errors.push('contact')
                dispatch({
                    type: "CREATION_FIELD_ERROR",
                    payload: {
                        key: "contact",
                        email: "Sisesta korrekne telefoninumber"
                    }
                })
            }

            if(details.address<3)  {
                errors.push('address')
                dispatch({
                    type: "CREATION_FIELD_ERROR",
                    payload: {
                        key: "address",
                        email: "Sisesta korrekne aadress"
                    }
                })
            }

            if(details.documentId<3)  {
                errors.push('documentId')
                dispatch({
                    type: "CREATION_FIELD_ERROR",
                    payload: {
                        key: "documentId",
                        email: "Sisesta korrekne dokumendi number"
                    }
                })
            }

            if(details.type==='privatePerson')  {
                if(details.personalId<11)  {
                    errors.push('personalId')
                    dispatch({
                        type: "CREATION_FIELD_ERROR",
                        payload: {
                            key: "personalId",
                            email: "Sisesta korrekne isikukood"
                        }
                    })
                }
            }

            if(details.type==='juridicalPerson') {

                if (details.companyRegistration < 8) {
                    errors.push('companyRegistration')
                    dispatch({
                        type: "CREATION_FIELD_ERROR",
                        payload: {
                            key: "companyRegistration",
                            email: "Sisesta korrekne registrinumber"
                        }
                    })
                }

                if (details.vatDutyNumber < 14) {
                    errors.push('vatDutyNumber')
                    dispatch({
                        type: "CREATION_FIELD_ERROR",
                        payload: {
                            key: "vatDutyNumber",
                            email: "Sisesta korrekne käibemaksukohustuslase number"
                        }
                    })
                }

            }*/
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