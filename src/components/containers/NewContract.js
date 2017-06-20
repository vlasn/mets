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
            // console.log("kõik",contractDetails)
            // console.log("kinnistu objekt",contractDetails.kinnistu)
            console.log("documents:",contractDetails.documents.forestNotice)


            let errors = {}


            dispatch({type: 'CONTRACT_CREATION_ATTEMPT'})


            if(Object.keys(errors).length<1){
                axios.post('/api/contract/create', {
                    email: contractDetails.esindajad,
                    //esindajad:contractDetails.esindajad,
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
                    leping:contractDetails.documents.contract,
                    metsateatis:contractDetails.documents.forestNotice

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
)(NewContract);