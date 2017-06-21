/**
 * Created by henrysavi on 16/06/17.
 */
import React from "react"
import { connect } from 'react-redux'
import axios from "axios"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Redirect from 'react-router-dom'
import AddContract from '../AddContract'

class NewContract extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <AddContract{...this.props}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFieldValueChange(source, value) {
            //console.log(arguments)
            dispatch({
                type: 'CONTRACT_CREATION_CHANGE_FIELD_VALUE',
                payload: {
                    key: source,
                    value: value
                }
            })
        },
        onSubmit(contractDetails){
            let errors = {}
            let emailValidation = /\S+@\S+\.\S+/
            let nameValidation = /^[A-Za-z ]{3,20}$/
            let cadastreValidation = /^[0-9:]{1,45}$/
            let dateValdation = /^(?=\s*\S).*$/
            if(!nameValidation.test(contractDetails.kinnistu.nimi))  {
                errors.propertyName = 'Sisesta korrektne kinnistu nimi';
            }else{
                delete errors.propertyName}

            if(!nameValidation.test(contractDetails.forestMaster))  {
                errors.forestMaster = 'Sisesta korrektne metsameistri nimi';
            }else{
                delete errors.forestMaster}

            if(!nameValidation.test(contractDetails.projectManager))  {
                errors.projectManager = 'Sisesta korrektne projektijuhi nimi';
            }else{
                delete errors.projectManager}

            if(!dateValdation.test(contractDetails.cuts))  {
                errors.cuts = 'Sisesta korrektne kuupäev';
            }else{
                delete errors.cuts}

            if(!dateValdation.test(contractDetails.export))  {
                errors.export = 'Sisesta korrektne kuupäev';
            }else{
                delete errors.export}

            if(!dateValdation.test(contractDetails.cutsExport))  {
                errors.cutsExport = 'Sisesta korrektne kuupäev';
            }else{
                delete errors.cutsExport}

            if(contractDetails.kinnistu.katastritunnused.length < 0){
                errors.cadastre = 'Sisesta korrektne katastritunnus';
            }else{
                delete errors.cadastre
            }

            for (let i = 0; i < contractDetails.esindajad.length; i++) {
                if(!emailValidation.test(contractDetails.esindajad[i])){
                    errors.email = 'Sisesta korrektne email';
                }else{
                    delete errors.email
                }
            }

            for (let i = 0; i < contractDetails.kinnistu.katastritunnused.length; i++) {
                if(!cadastreValidation.test(contractDetails.kinnistu.katastritunnused[i])){
                    errors.cadastre = 'Sisesta korrektne katastritunnus';
                }else{
                    delete errors.cadastre
                }
            }

            // if(contractDetails.documents.contract[0].length<1) {
            //     errors.contract = 'Lisa lepingu fail';
            // }else{
            //     delete errors.contract
            // }
            // if(contractDetails.documents.forestNotice[0].length<1) {
            //     errors.forestNotice = 'Lisa metsateatise fail';
            // }else{
            //     delete errors.forestNotice
            // }

            //console.log("all:",contractDetails)

            dispatch({type: 'CONTRACT_CREATION_ATTEMPT'})
            let object = {
                email: contractDetails.esindajad,
                esindajad:contractDetails.esindajad,
                hinnatabel: {
                    snapshot: "tere olen hinnatabel"
                },
                contract_creator: "String",
                metsameister: contractDetails.forestMaster,
                dates: {
                    raielopetamine: contractDetails.cuts,
                    väljavedu: contractDetails.export,
                    raidmete_valjavedu: contractDetails.cutsExport
                },
                projektijuht: contractDetails.projectManager,
                kinnistu: {
                    nimi: contractDetails.kinnistu.nimi,
                    katastritunnused: contractDetails.kinnistu.katastritunnused
                },
            };
            //console.log("objekt",object)

            let objectToFormData = function(obj, form, namespace) {
                let fd = form || new FormData();
                let formKey;
                for(let property in obj) {
                    if(obj.hasOwnProperty(property)) {
                        if(namespace) {
                            formKey = namespace + '[' + property + ']';
                        } else {
                            formKey = property;
                        }
                        if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                            objectToFormData(obj[property], fd, property);
                        } else {
                            // if it's a string or a File object
                            fd.append(formKey, obj[property]);
                        }
                    }
                }
                return fd;
            };

            let formData = objectToFormData(object);
            formData.append('metsateatis', contractDetails.documents.forestNotice[0][0]);
            formData.append('leping', contractDetails.documents.contract[0][0]);

            //console.log("errorid",errors)
             if(Object.keys(errors).length<1){
                // console.log("erroreid ei olnud")

                 fetch('/api/contract/create', {
                    method: 'POST',
                    body: formData
                })
                    .then(r => r.json())

                    .then(data => {
                        console.log(data.status)
                        if(data.status === 'accept') {
                                     dispatch({type: 'CONTRACT_CREATION_SUCCESS', payload: data.msg})
                                 } else {
                                     dispatch({type: 'CONTRACT_CREATION_FAILURE', payload: data.msg})
                                 }
                        if(data.status === 'reject') {
                            console.log('Sellise emailiga kasutajat ei leitud')
                        }

                    })
                    .catch(error => {
                        console.log("catch",error);
                        dispatch({type: 'CONTRACT_CREATION_FAILURE', payload: error})
                    })
             } else {console.log('dispatching')
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
)(NewContract);