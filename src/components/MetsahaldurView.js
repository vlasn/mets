import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DetailsWrapper from "./presentational/DetailsWrapper"
const css = require("./MetsahaldurView.scss")


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