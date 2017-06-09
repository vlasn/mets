const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Login from "./components/Login"
import store from "./store"
import Validate from "./components/Validate"
import Header from "./components/Header"
import HeaderWrapper from "./components/HeaderWrapper"
import Table from "./components/MetsahaldurViewTable"
import MetsCard from "./components/MetsCard"
import DetailsWrapper from "./components/DetailsWrapper";
import MetsahaldurViewTable from "./components/MetsahaldurViewTable"
import ClientLanding from "./components/ClientLanding"
import Dialog from './components/Dialog'
import Dropdown from './components/Dropdown'
import TestBtn from './components/testBtn'
import History from './components/history'

class App extends React.Component {

    render() {
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
                    "status": "active",
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

        return (
            <Router history={History}>
                <div className="main__wrapper">
                    <HeaderWrapper/>
                    <Route exact={true} path="/login" component={Login}/>
                    <Route exact path="/validate/:hash" component={Validate}/>
                    <Route path="/" exact={true} render={()=>(
                        <ClientLanding {...sampleContract}/>)
                    }/>
                </div>
            </Router>
        );
    }
}
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
