const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Link, Route } from "react-router-dom/es"
import Login from "./components/Login"
import store from "./store"
import Validate from "./components/Validate"
import HeaderWrapper from "./components/HeaderWrapper"
import History from './components/history'
import VeoseTable from './components/Veoselehed'

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
        let tableData = [
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33klrnqjykbnqy882',
                kogus: '30',
                summa: '1421',
            },

            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33mkrleny882',
                kogus: '23',
                summa: '11',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 338gmnkflnw82',
                kogus: '30',
                summa: '41',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 338jgireaojy82',
                kogus: '30',
                summa: '7',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 3jgflakhlm3882',
                kogus: '30',
                summa: '1421',
            },

            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33arhja;882',
                kogus: '23',
                summa: '11',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33grarjraj882',
                kogus: '30',
                summa: '41',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33gdsaryuae882',
                kogus: '30',
                summa: '7',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 3gdsHRru3882',
                kogus: '30',
                summa: '1421',
            },

            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 3adsafas82',
                kogus: '23',
                summa: '1',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 338fsafsadsa82',
                kogus: '30',
                summa: '41',
            },
            {
                kuupäev: '11.03.2016',
                veoseleht: 'Veoseleht 33fhsddjtkaj882',
                kogus: '30',
                summa: '7',
            },
        ];

        return (
            <Router history={History}>
                <div className="main__wrapper">
                    <HeaderWrapper/>
                    <Route exact={true} path="/login" component={Login}/>
                    <Route exact path="/validate/:hash" component={Validate}/>
                    {/*<Route path="/" exact={true} render={()=>(
                        <ClientLanding {...sampleContract}/>)
                    }/>*/}
                    <VeoseTable tableData = {tableData}/>
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
