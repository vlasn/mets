import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MetsahaldurViewTable from "./MetsahaldurViewTable"
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

const css = require("./MetsahaldurView.scss")

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const MetsahaldurView = () => (
    <div className = "MetsahaldurView__wrapper">
        <MuiThemeProvider>

            <Card>
                <CardHeader
                    title="Mets 1"
                    //subtitle="Subtitle"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {/*<MetsahaldurViewTable/>*/}
                </CardText>
            </Card>
        </MuiThemeProvider>
    </div>
);

export default MetsahaldurView;