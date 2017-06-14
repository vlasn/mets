import React, {Component} from "react"
import { connect } from 'react-redux'
import { search } from "../../actions/uiActions"
import ContractCards from "../ManageContracts"
import axios from "axios"

class Contracts extends Component {
    constructor(props){
        super(props)
    }
    render(){
        //Will need to provide a
        return(<ContractCards {...this.props}/>)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        searchTriggered(opt){
            // statusFilterOption: '',
            // personFilterOption: '',
            // searchTerm: ''

            dispatch({type: "SEARCH_TRIGGERED"});
            search(opt)
                .then(({data}) => {
                    console.log(data.data)
                    if(data.status==='accept') {
                        dispatch({type: "SEARCH_COMPLETE", payload: data.data})
                    } else {
                        dispatch({type: "SEARCH_FAILED", payload: data.msg})
                    }
                })
                .catch(console.log)

        },
        searchWithFilter(){

        }
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.clientManagement.cards.filter,
        data: state.clientManagement.contracts,
        //data: sampleContract.data
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contracts);

let sampleContract = {
    "status":"accept",
    "msg": "",
    "data": [
        { //Lepinguobjekt
            "contractId": "LEPING-FF-3124486234",
            "propertyName": "Paks Must Mets",
            "cadastral": "",
            "status": "active",
            "documents": {
                "contracts":[
                    {
                        "id":"a95032kjfqnviue0",
                        "filename":"leping1.pdf",
                        "filepath":"filepath",
                        "datestamp":"00-00-0000",
                        "author":"Tagametsa Toomas"
                    },
                    {
                        "id": "a95032kjfqnviue2",
                        "filename":"leping1_lisa.pdf",
                        "filepath":"filepath",
                        "datestamp":"00-00-0000",
                        "author":"Tagametsa Toomas"
                    }
                ],
                "prices": {
                    "reference": "some kind of internal MongoDB ref?",
                    "datestamp": "00-00-0000"
                },
                "metsateatis": {
                    "filename":"teatis1.pdf",
                    "filepath":"filepath",
                    "datestamp":"00-00-0000",
                    "author":"Tagametsa Toomas"
                },
                "koondakt": {
                    "filename":"akt1.pdf",
                    "filepath":"filepath",
                    "datestamp":"00-00-0000",
                    "author":"Tagametsa Toomas"
                },
                "haldus": {
                    "projectManager":"Arnold Rüütel",
                    "metsameister":"Ingrid Rüütel",
                    "datestamp": "00-00-0000"
                }
            }
        },
        { //Lepinguobjekt
            "contractId": "LEPING-FF-3124486234",
            "propertyName": "Paks Must Mets",
            "cadastral": "",
            "status": "pending",
            "documents": {
                "contracts":[
                    {
                        "filename":"leping1.pdf",
                        "filepath":"filepath",
                        "datestamp":"00-00-0000",
                        "author":"Tagametsa Toomas"
                    }
                ],
                "prices": {
                    "reference": "some kind of internal MongoDB ref?",
                    "datestamp": "00-00-0000"
                },
                "metsateatis": {
                    "filename":"teatis1.pdf",
                    "filepath":"filepath",
                    "datestamp":"00-00-0000",
                    "author":"Tagametsa Toomas"
                },
                "koondakt": {
                    "filename":"akt1.pdf",
                    "filepath":"filepath",
                    "datestamp":"00-00-0000",
                    "author":"Tagametsa Toomas"
                },
                "haldus": {
                    "projectManager":"Arnold Rüütel",
                    "metsameister":"Ingrid Rüütel",
                    "datestamp": "00-00-0000"
                }
            }
        }
    ]
}