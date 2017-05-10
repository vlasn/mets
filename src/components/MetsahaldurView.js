import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MetsahaldurViewTable from "./MetsahaldurViewTable"
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DetailsWrapper from "./DetailsWrapper"
const css = require("./MetsahaldurView.scss")

const styles = {
    card: {
        boxShadow:'1px',
        border:'1px solid black',
        borderRadius:'0px',
        padding:'10px',
},
    cardHeader: {
        display:'inline',
        textTransform: 'uppercase',


    },
    cardHeaderLeft: {
        display:'inline',
        padding:'0',
        float:'left',
        textTransform: 'uppercase',

    },
    cardHeaderRight: {
        display:'inline',
        padding:'0',

        float:'right',
        textTransform: 'uppercase',

    },
    cardText: {
        textAlign:'left',
        padding:'16 0 16 0',


    },
};

const data = {
    "status":"accept",
    "msg": "",
    "data": [
        { //Lepinguobjekt
            "estate":"Tagametsa",
            "status": "active",
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
            "metsateatis?": {
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
            }
        }
    ]
}

export default class MetsahaldurView extends React.Component {
    render() {
        return (
            <div className="MetsahaldurView__wrapper">
                <MuiThemeProvider>
                    <DetailsWrapper testData={data.data[0]}/>
                </MuiThemeProvider>
            </div>
        )
    }
}